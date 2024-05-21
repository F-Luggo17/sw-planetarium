import { useEffect, useState } from 'react';
import { Planet } from '../lib/definitions';
import { fetchPlanets } from '../services/planetsService';

export const usePlanets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPlanets() {
      try {
        const data = await fetchPlanets();
        setPlanets(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    getPlanets();
  }, []);

  return { planets, loading, error };
};