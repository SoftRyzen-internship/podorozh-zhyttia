import { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Logo from '/public/svg/logo.svg';
import Exit from '/public/svg/exit.svg';
import Burger from '/public/svg/burger.svg';

import { TypeNavigationLink } from '../../constants/navLinks/types';
import { navLinks } from '@/constants/navLinks/navLinks';

const BurgerMenu: FC = () => {
  const { t } = useTranslation();
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    setCloseModal(!closeModal);
  };

  return (
    <div className="m-auto w-full h-screen tablet:w-1/2 tablet:h-[452px] desktop:hidden">
      <div className="flex items-center justify-between h-16 px-5 bg-white">
        <Logo />
        <button onClick={handleCloseModal} aria-label="exit" type="button">
          {closeModal ? <Exit /> : <Burger />}
        </button>
      </div>
      {closeModal && (
        <div className="h-full px-5 pt-10 bg-yellow">
          <ul className="">
            {navLinks.map(({ to, title }: TypeNavigationLink) => (
              <li
                key={title}
                className="mt-5 pb-2 border-b-[1px] border-b-accent text-lg text-black-charcoal hover:text-accent"
              >
                <Link href={to}>{t(title)}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
