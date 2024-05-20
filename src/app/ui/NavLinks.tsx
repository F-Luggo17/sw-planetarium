import { NavLink } from 'react-router-dom';
import { GlobeAltIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';

const links = [
    { name: 'Planets', url: '/planets', icon: GlobeAltIcon },
    { name: 'About', url: '/about', icon: UserIcon }
    // { name: 'Films', href: '/dashboard/customers', icon: UserGroupIcon },
];

export const NavLinks = () => {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <NavLink
                        key={link.name}
                        to={link.url}
                        className={({ isActive }) => {
                                return isActive 
                                ? 'flex h-[48px] items-center justify-center gap-2 rounded-md text-blue-600 font-bold p-3 text-sm font-small hover:text-blue-700 md:justify-start md:p-2 md:px-3'
                                : 'flex h-[48px] items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-small hover:text-blue-600 md:justify-start md:p-2 md:px-3';
                            }}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </NavLink>
                );
            })}
        </>
    );
}
