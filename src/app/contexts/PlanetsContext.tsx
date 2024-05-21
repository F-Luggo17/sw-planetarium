import React, { createContext, useContext, useState, useEffect } from 'react';
import { Planet } from '../lib/definitions';
import { fetchPlanets } from '../services/planetsService';

interface PlanetsContextProps {
  planets: Planet[];
  loading: boolean;
  error: string | null;
  setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>
}

export const PlanetsContext = createContext<PlanetsContextProps | undefined>(undefined);

export const usePlanetsContext = () => {
  const context = useContext(PlanetsContext);
  if (!context) {
    throw new Error('usePlanetsContext must be used within a PlanetsProvider');
  }
  return context;
};

export const PlanetsProvider: React.FC = ({ children }: any) => {
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

  return (
    <PlanetsContext.Provider value={{ planets, setPlanets, loading, error }}>
      {children}
    </PlanetsContext.Provider>
  );
};
