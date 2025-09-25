import { useEffect, useState } from "react";

/**
 * Fetch data from an API endpoint and map it into a normalized projects shape.
 * @param {string} endpoint - API URL to fetch projects from.
 * @param {(raw: any[]) => any[]} mapFn - Mapping function to convert raw array to the Portfolio project shape.
 */
export function useFetchProjects(mapFn) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  useEffect(() => {
    if (!endpoint) {
      setError(new Error("API endpoint is not defined"));
      setLoading(false);
      return;
    }
    const abortController = new AbortController();

    async function fetchProjects() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(endpoint, { signal: abortController.signal });
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        const arrayData = Array.isArray(data) ? data : [];
        const normalized =
          typeof mapFn === "function" ? mapFn(arrayData) : arrayData;
        setProjects(normalized);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          setProjects([]);
        }
      } finally {
        setTimeout(() => setLoading(false), 600);
      }
    }

    fetchProjects();

    return () => {
      abortController.abort();
    };
  }, [mapFn]);

  return { projects, loading, error };
}
