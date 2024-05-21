import { UserIcon } from "@heroicons/react/24/outline";
import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const ResidentDetail = () => {
    const location = useLocation();
    const { state } = location || {};

    if (!state) {
        return <Navigate to="/planets" replace />;
    }

    return (
        <Fragment>
            <div className="flex bg-slate-600 border border-2 rounded-lg h-full gap-9 m-10 p-8">
                <div className="flex flex-col justify-center items-center text-center font-bold p-3 h-full">
                    <div className="text-3xl">{state.name}</div>
                    <UserIcon />
                    <div>Image not available</div>
                </div>
                <div className="grid grid-cols-3 gap-6 w-full p-10 items-center">
                    <div className="flex flex-grow text-xl capitalize"><span className="font-bold text-slate-900">Height:</span> {state.height}</div>
                    <div className="flex flex-grow text-xl capitalize"><span className="font-bold text-slate-900">Mass:</span> {state.mass}</div>
                    <div className="flex flex-grow text-xl capitalize"><span className="font-bold text-slate-900">Hair Color:</span> {state.hair_color}</div>
                    <div className="flex flex-grow text-xl capitalize"><span className="font-bold text-slate-900">Skin Color:</span> {state.skin_color}</div>
                    <div className="flex flex-grow text-xl capitalize"><span className="font-bold text-slate-900">Eye Color:</span> {state.eye_color}</div>
                    <div className="flex flex-grow text-xl capitalize"><span className="font-bold text-slate-900">Birth Year:</span> {state.birth_year}</div>
                    <div className="flex flex-grow text-xl capitalize"><span className="font-bold text-slate-900">Gender:</span> {state.gender}</div>
                </div>
            </div>
            <div>I created this page to show the breadcrumbs but i believe it's not neccesary due to the previous UI is showing what the user needs.</div>
        </Fragment>

    )
}
