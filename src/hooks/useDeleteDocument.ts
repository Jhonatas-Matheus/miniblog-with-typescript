import { useState, useEffect, useReducer } from "react";

import { db } from "../firebase/config";

import { doc, deleteDoc } from "firebase/firestore";

export const useDeleteDocument = (docCollection: string) => {
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const checkCancelBeforeDelete = () => {
    if (!cancelled) {
      setLoading(false);
      return;
    } else {
      setLoading(true);
    }
  };
  const deleteDocument = async (id?: string) => {
    checkCancelBeforeDelete();
    try {
      if (id) {
        const deletedDocument = await deleteDoc(doc(db, docCollection, id));
      }
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error.message);
      checkCancelBeforeDelete();
    }
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return {
    deleteDocument,
    loading,
  };
};
