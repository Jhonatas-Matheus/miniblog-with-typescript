import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const useInsertDocument = (docCollection: string) => {
  const [loading, setLoading] = useState<null | boolean>(null);
  const [error, setError] = useState<null | boolean | Error>(null);
  const [cancelled, setCancelled] = useState<boolean>(false);
  const checkCancelBefore = (
    loading: boolean | null,
    error: boolean | null | Error
  ) => {
    if (!cancelled) {
      setLoading(loading);
      setError(error);
    }
  };
  const insertDocument = async (document: object) => {
    checkCancelBefore(true, null);
    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };
      // const insertedDocument = await addDoc(
      //   collection(db, docCollection),
      //   newDocument
      // );
      // console.log(insertedDocument);
      addDoc(collection(db, docCollection), newDocument);
      checkCancelBefore(false, null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        checkCancelBefore(false, error);
      }
    }
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return { insertDocument, loading, error };
};
