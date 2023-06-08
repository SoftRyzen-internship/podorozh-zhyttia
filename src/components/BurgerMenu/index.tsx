import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import NavLink from '@/components/NavLink';

import { navLinks } from '@/constants/navLinks/navLinks';
import { TypeNavigationLink } from '@/constants/navLinks/types';
import { TypeBurgerMenuProps } from './types';

const BurgerMenu: FC<TypeBurgerMenuProps> = ({
  activePatch,
  onActivePatch,
  handleCloseModal,
  offset = 0,
}) => {
  const { t } = useTranslation();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleLinkClick = (to: string) => {
    onActivePatch(to);
    handleCloseModal();
  };

  return (
    <div
      className="absolute z-20 w-screen h-screen bg-black bg-opacity-20"
      onClick={handleClick}
    >
      <div className="bg-yellow z-30 absolute right-0 w-full h-screen tablet:w-1/2 tablet:h-[521px] desktop:hidden">
        <div className="container">
          <div className="px-5 pt-10 tablet:max-w-[340px]">
            <ul>
              {navLinks.map(({ to, title }: TypeNavigationLink) => (
                <li
                  key={title}
                  className="mt-5 pb-2 border-b-[1px] border-b-accent text-lg text-black-charcoal hover:text-accent"
                >
                  <NavLink
                    isActive={activePatch === to}
                    path={to}
                    offset={-offset}
                    handleClick={() => handleLinkClick(to)}
                  >
                    {t(title)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
