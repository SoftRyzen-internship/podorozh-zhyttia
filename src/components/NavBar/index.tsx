import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import NavLink from '@/components/NavLink';

import { navLinks } from '@/constants/navLinks/navLinks';
import { INavBarProps } from './types';

const NavBar: FC<INavBarProps> = ({ className, offset = 0 }) => {
  const { t } = useTranslation();

  return (
    <nav className={className}>
      <ul className="flex gap-10 text-base">
        {navLinks.map(({ to, title }) => (
          <li key={title}>
            <NavLink path={to} offset={-offset}>
              {t(title)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
