import { NavLink } from 'react-router-dom';
import { NavLinks } from './NavLinks';;
// import { PowerIcon } from '@heroicons/react/24/outline';

export const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 mr-5 md:px-2">
      <NavLink
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 bg-transparent"
        to="/planets"
      >
        <div className="text-white flex items-center gap-3">
        <img
              src={'/swIcon.png'}
              alt='Star Wars Planets'
              width={55}
              height={30}
            /><p>Planetarium</p>
        </div>
      </NavLink>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-transparent md:block"></div>
      </div>
    </div>
  );
}