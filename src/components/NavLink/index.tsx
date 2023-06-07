import { FC } from 'react';
import { Link } from 'react-scroll';

import { NavLinkProps } from './types';

const NavLink: FC<NavLinkProps> = ({
  isActive,
  path,
  children,
  offset = 0,
  handleClick,
}) => {
  return (
    <Link
      tabIndex={0}
      to={path}
      smooth={true}
      duration={500}
      offset={offset}
      className={`${
        isActive ? 'text-accent' : 'text-black-charcoal'
      } block text-lg font-normal leading-7 transition-colors cursor-pointer desktop:text-base desktop:leading-normal hover:text-accent focus:outline-accent focus:outline-offset-4`}
      onClick={() => {
        handleClick && handleClick(path);
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
