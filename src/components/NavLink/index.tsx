import { FC } from 'react';
import { Link } from 'react-scroll';

import { NavLinkProps } from './types';

const NavLink: FC<NavLinkProps> = ({
  path,
  children,
  offset = 0,
  handleClick,
}) => {
  return (
    <Link
      tabIndex={1}
      to={path}
      smooth={true}
      spy={true}
      duration={500}
      offset={offset}
      className="block text-lg font-normal leading-7 transition-colors cursor-pointer desktop:text-base desktop:leading-normal text-black-charcoal hover:text-accent focus:text-accent focus:outline-none"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
