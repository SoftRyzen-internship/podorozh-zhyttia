import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Burger from '/public/svg/burger.svg';
import Exit from '/public/svg/exit.svg';

import { IBurgerButton } from './types';

const BurgerButton: FC<IBurgerButton> = ({ handleCloseModal, closeModal }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={handleCloseModal}
      aria-label={t('modal.aria-close') as string}
      type="button"
      className="desktop:hidden"
    >
      {closeModal ? <Exit /> : <Burger />}
    </button>
  );
};

export default BurgerButton;
