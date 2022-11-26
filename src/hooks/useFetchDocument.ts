import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { iPostDetailProps } from "../components/PostDetail/PostDetail";

export const useFetchDocument = (docCollection: string, id: string) => {
  const [document, setDocument] = useState<undefined | iPostDetailProps | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const loadDocument = async () => {
      setLoading(true);
      try {
        const docRef: DocumentReference<DocumentData> = await doc(
          db,
          docCollection,
          id
        );
        const docSnap = await getDoc(docRef);
        setDocument(docSnap.data());
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    loadDocument();
  }, [docCollection, id]);
  return {
    document,
    loading,
    error,
  };
};
