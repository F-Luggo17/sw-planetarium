import { IdentificationIcon } from "@heroicons/react/24/outline";
import { Person } from "../lib/definitions";
import { Link } from "react-router-dom";

type ResidentCardProps = {
  resident: Person;
}

export const ResidentCard = ({resident}: ResidentCardProps) => {
  return (
    <div className="flex flex-col bg-slate-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 border border-2 rounded-lg">
        <div className="flex border-b-2 justify-between items-center font-bold p-3">
          <div>{resident.name}</div>
          <Link 
          key={resident.name}
          to={`${resident.name}`}
          state={resident}
          type="button" className="border-1 bg-blue-700 rounded-lg px-3 py-1" title="See details...">
            <IdentificationIcon className="w-6 text-white"/>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-x-3 gap-y-2 p-3">
            <div className="capitalize"><span className="font-bold text-slate-900">Height:</span> {resident.height}</div>
            <div className="capitalize"><span className="font-bold text-slate-900">Mass:</span> {resident.mass}</div>
            <div className="capitalize"><span className="font-bold text-slate-900">Hair Color:</span> {resident.hair_color}</div>
            <div className="capitalize"><span className="font-bold text-slate-900">Skin Color:</span> {resident.skin_color}</div>
            <div className="capitalize"><span className="font-bold text-slate-900">Eye Color:</span> {resident.eye_color}</div>
            <div className="capitalize"><span className="font-bold text-slate-900">Birth Year:</span> {resident.birth_year}</div>
            <div className="capitalize"><span className="font-bold text-slate-900">Gender:</span> {resident.gender}</div>
        </div>
    </div>
  )
}
