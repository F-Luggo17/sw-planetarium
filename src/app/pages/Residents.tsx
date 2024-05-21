import { useParams, Navigate } from 'react-router-dom';
import { usePlanetsContext } from '../contexts/PlanetsContext';
import { Header } from '../ui/Header';
import { ResidentGrid } from '../ui/ResidentGrid';

export const Residents = () => {
  const params = useParams();
  const { id } = params;
  const { planets } = usePlanetsContext();

  const planet = planets.find((planet) => planet.name === id);

  if (!planet) {
    return <Navigate to="/planets" replace />;
  }

  return (
    <div className="flex flex-col p-8 gap-3">
      <Header name={`${id} Residents List`} description='Use this information with responsibility.' />
      <ResidentGrid residents={planet.residents} />
    </div>
  );
};
