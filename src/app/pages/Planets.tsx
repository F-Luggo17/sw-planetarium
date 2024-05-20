import { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { useForm, usePlanets } from '../hooks';
import { Planet, FormState } from '../lib/definitions';
import { fetchPlanets } from '../lib/data';
import { LoadingIcon, Header } from '../ui';

export const Planets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [allPlanets, setAllPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [planetsPerPage] = useState<number>(5); // Number of planets per page

  const { searchText, onInputChange }: FormState = useForm({ searchText: '' });

  const onSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const filteredPlanets = allPlanets.filter(planet => 
      planet.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setPlanets(filteredPlanets);
    setCurrentPage(1); // Reset to first page on search
  }

  useEffect(() => {
    async function getPlanets() {
      try {
        const data = await fetchPlanets();
        setPlanets(data);
        setAllPlanets(data);
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

  // Calculate the current planets to display
  const indexOfLastPlanet = currentPage * planetsPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(planets.length / planetsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <main className='flex flex-grow p-8'>
      <div className="flex flex-grow flex-col gap-3">
        <Header name='Planets List' description='Click row to see planet residents' />

        {loading ? <LoadingIcon height='150' width='150' /> : (
          <Fragment>
            <form onSubmit={onSearchSubmit} className='flex w-full'>
              <input
                type='text'
                name='searchText'
                className='flex w-full rounded-l-lg border-2 px-3 py-1 bg-transparent'
                placeholder='Search planets...'
                autoComplete='off'
                value={searchText}
                onChange={onInputChange}
              />
              <button type='submit' className='bg-blue-700 rounded-r-lg border-2 px-3 active:bg-blue-800'>Search</button>
            </form>
            <div className="flex flex-col h-full">
              <div className="border rounded-lg border-2 h-full">
                <table className="table-auto w-full h-full">
                  <thead>
                    <tr className="dark:bg-slate-800">
                      <th className="rounded-tl-lg px-4 py-2 text-start">Name</th>
                      <th className="px-4 py-2 text-start">Rotation Period</th>
                      <th className="px-4 py-2 text-start">Orbital Period</th>
                      <th className="px-4 py-2 text-start">Diameter</th>
                      <th className="px-4 py-2 text-start">Climate</th>
                      <th className="px-4 py-2 text-start">Gravity</th>
                      <th className="px-4 py-2 text-start">Terrain</th>
                      <th className="px-4 py-2 text-start">Surface Water</th>
                      <th className=" px-4 py-2 text-start">Population</th>
                      <th className="rounded-tr-lg px-4 py-2 text-start">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPlanets.map((planet) => {
                      return (
                        <tr
                          className="dark:bg-slate-600 hover:bg-slate-500"
                          key={planet.name}
                        >
                          <td className="px-4 py-2 capitalize">{planet.name}</td>
                          <td className="px-4 py-2 capitalize">{planet.rotation_period}</td>
                          <td className="px-4 py-2 capitalize">{planet.orbital_period}</td>
                          <td className="px-4 py-2 capitalize">{planet.diameter}</td>
                          <td className="px-4 py-2 capitalize">{planet.climate}</td>
                          <td className="px-4 py-2 capitalize">{planet.gravity}</td>
                          <td className="px-4 py-2 capitalize">{planet.terrain}</td>
                          <td className="px-4 py-2 capitalize">{planet.surface_water}</td>
                          <td className="px-4 py-2 capitalize">{planet.population}</td>
                          <td className="px-4 py-2 text-center">
                            <NavLink
                              key={planet.name}
                              to={`${planet.name}`}
                              state={planet}
                              className='flex bg-blue-800 items-center justify-center rounded-md p-1 text-sm font-medium hover:bg-blue-700 active:bg-blue-900'
                              title={`Click to see ${planet.name} residents`}
                            >
                              <UserGroupIcon className="w-6" />
                            </NavLink>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <nav className="flex justify-center mt-4">
                <ul className="flex list-none gap-2">
                  {pageNumbers.map(number => (
                    <li key={number}>
                      <button
                        onClick={() => paginate(number)}
                        className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Fragment>
        )}
      </div>
    </main>
  );
}