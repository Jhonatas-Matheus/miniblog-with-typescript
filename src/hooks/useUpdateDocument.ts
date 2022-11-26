import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

export const useUpdateDocument = (docCollection: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | undefined>(null);
  const [cancelled, setCancelled] = useState(false);
  const checkCancelledBeforeUpdate = (error?: string | null) => {
    if (cancelled) {
      setLoading(false);
      setError(error);
    }
  };
  const updateDocument = async (uid: string, data: object) => {
    try {
      const docRef = await doc(db, docCollection, uid);
      const updateDocument = await updateDoc(docRef, data);
      checkCancelledBeforeUpdate(null);
      console.log(updateDocument);
    } catch (error: unknown) {
      if (error instanceof Error) {
        checkCancelledBeforeUpdate(error.message);
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return { updateDocument };
};
