import { Person } from "../lib/definitions";
import { ResidentCard } from "./ResidentCard";

type ResidentGridProps = {
  residents: Person[];
}

export const ResidentGrid = ({residents}: ResidentGridProps) => {

  return (
    <div className="grid grid-cols-4 gap-5">
      {residents.map(resident => (
        <ResidentCard resident={resident} />
      ))}
    </div>
  )
}
