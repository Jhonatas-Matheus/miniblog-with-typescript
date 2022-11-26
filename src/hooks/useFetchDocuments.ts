import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { async } from "@firebase/util";

export const useFetchDocuments = (
  docCollection: string,
  search: string | null = null,
  uid: string | null | undefined = null
) => {
  const [documents, setDocuments] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<null | boolean>(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (cancelled) {
        return;
      }
      setLoading(true);
      const collectionRef = await collection(db, docCollection);

      try {
        let q;
        if (search) {
          q = await query(
            collectionRef,
            where("tags", "array-contains", search),
            orderBy("createdAt", "desc")
          );
        } else if (uid) {
          q = await query(collectionRef, where("uid", "==", uid));
        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc"));
        }
        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setLoading(false);
    };
    loadData();
  }, [docCollection, search, uid, cancelled]);
  console.log(documents);

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);
  return { documents, loading, error };
};
