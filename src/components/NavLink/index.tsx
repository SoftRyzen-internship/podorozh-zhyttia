import { FC } from 'react';
import { Link } from 'react-scroll';

import { NavLinkProps } from './types';

const NavLink: FC<NavLinkProps> = ({ path, children, offset = 0 }) => {
  return (
    <Link
      tabIndex={1}
      to={path}
      smooth={true}
      spy={true}
      duration={500}
      offset={offset}
      className="block text-lg desktop:text-base font-normal leading-7 desktop:leading-normal text-black-charcoal hover:text-accent focus:text-accent focus:outline-none transition-colors cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default NavLink;
