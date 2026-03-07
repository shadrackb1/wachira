import { useState, useEffect } from "react";
import { subscribeToDocument, subscribeToCollection } from "../services/firestore";

export const useContent = (collectionName: string, docId?: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    let unsubscribe: () => void;

    try {
      if (docId) {
        unsubscribe = subscribeToDocument(collectionName, docId, (docData) => {
          setData(docData);
          setLoading(false);
        });
      } else {
        unsubscribe = subscribeToCollection(collectionName, (collectionData) => {
          setData(collectionData);
          setLoading(false);
        });
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [collectionName, docId]);

  return { data, loading, error };
};
