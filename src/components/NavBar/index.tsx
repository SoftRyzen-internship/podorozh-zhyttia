import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import NavLink from '@/components/NavLink';

import { navLinks } from '@/constants/navLinks/navLinks';
import { INavBarProps } from './types';

const NavBar: FC<INavBarProps> = ({
  className,
  offset = 0,
  activePatch,
  onActivePatch,
}) => {
  const { t } = useTranslation();

  return (
    <nav className={className}>
      <ul className="flex gap-10 text-base">
        {navLinks.map(({ to, title }) => (
          <li key={title}>
            <NavLink
              isActive={activePatch === to}
              path={to}
              offset={-offset}
              handleClick={() => onActivePatch(to)}
            >
              {t(title)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
