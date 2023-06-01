import { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';

import Logo from '/public/svg/logo.svg';
import Exit from '/public/svg/exit.svg';
import Burger from '/public/svg/burger.svg';

import { TypeNavigationLink } from './types';

const linkArray: TypeNavigationLink[] = [
  { id: 1, to: '', title: 'Психологічна допомога' },
  { id: 2, to: '', title: 'Як ти?' },
  { id: 3, to: '', title: 'Звітність' },
  { id: 4, to: '', title: 'Фотогалерея' },
  { id: 5, to: '', title: 'Контакти' },
];

const BurgerMenu: FC = () => {
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    setCloseModal(!closeModal);
  };

  return (
    <div className="m-auto w-full h-screen tablet:w-1/2 tablet:h-[452px] desktop:hidden">
      <div className="bg-white flex justify-between items-center px-5 h-16">
        <Logo />
        <button onClick={handleCloseModal} aria-label="exit" type="button">
          {closeModal ? <Exit /> : <Burger />}
        </button>
      </div>
      {closeModal && (
        <div className="bg-yellow px-5 pt-10 h-full">
          <ul className="">
            {linkArray.map(({ id, to, title }: TypeNavigationLink) => (
              <li
                key={id}
                className="mt-5 pb-2 border-b-[1px] border-b-accent text-lg text-black-charcoal hover:text-accent"
              >
                <Link href={to}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
