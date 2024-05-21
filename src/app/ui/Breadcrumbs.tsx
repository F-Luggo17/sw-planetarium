import { Fragment } from 'react/jsx-runtime';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex justify-end">
      <div className="flex bg-slate-800 rounded gap-3">
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <div key={to} className='py-2 px-4 font-bold capitalize'>{value.replace(/%20/g, " ")}</div>

          ) : (
            <Fragment>
              <div key={to} className='py-2 px-4 capitalize'>
                <Link to={to}>{value.replace(/%20/g, " ")}</Link>
              </div>
              <div key={to} className='py-2 px-4 capitalize'>
                <ChevronDoubleRightIcon className='w-6'/>
              </div>
            </Fragment>
          );
        })}
      </div>

    </nav>
  );
};

