import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Burger from '/public/svg/burger.svg';
import Exit from '/public/svg/exit.svg';

import { IBurgerButton } from './interfaces';

const BurgerButton: FC<IBurgerButton> = ({ handleCloseModal, closeModal }) => {
  const { t } = useTranslation();

  return (
    <div className="desktop:hidden">
      <button
        onClick={handleCloseModal}
        aria-label={t('modal.aria-close') as string}
        type="button"
      >
        {closeModal ? <Exit /> : <Burger />}
      </button>
    </div>
  );
};

export default BurgerButton;
