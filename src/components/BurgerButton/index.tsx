import { FC } from 'react';

import Burger from '/public/svg/burger.svg';
import Exit from '/public/svg/exit.svg';

import { IBurgerButton } from './interfaces';

const BurgerButton: FC<IBurgerButton> = ({ handleCloseModal, closeModal }) => {
  return (
    <div className="desktop:hidden">
      <button onClick={handleCloseModal} aria-label="exit" type="button">
        {closeModal ? <Exit /> : <Burger />}
      </button>
    </div>
  );
};

export default BurgerButton;
