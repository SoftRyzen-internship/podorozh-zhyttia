import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Burger from '/public/svg/burger.svg';
import Exit from '/public/svg/exit.svg';

import { IBurgerButton } from './types';

const BurgerButton: FC<IBurgerButton> = ({
  handleToggleModal,
  isOpenModal,
}) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={handleToggleModal}
      aria-label={t('modal.aria-close') as string}
      type="button"
      className="desktop:hidden focus:outline-accent"
    >
      {isOpenModal ? <Exit /> : <Burger />}
    </button>
  );
};

export default BurgerButton;
