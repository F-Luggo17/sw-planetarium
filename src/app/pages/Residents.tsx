import { Navigate, useLocation, useParams } from "react-router"
import { Header, ResidentGrid } from "../ui"

export const Residents = () => {
  const params = useParams();
  const { id } = params;
  const location = useLocation();
  const { state } = location || {};

  if (!state) {
    return <Navigate to="/planets" replace />;
  }

  return (
    <div className="flex flex-col p-8 gap-3">
        <Header name={`${id} Residents List`} description='Use this information with responsability.'/>
        <ResidentGrid residents={state.residents} />
    </div>
  )
}
