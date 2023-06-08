import { FC, useRef, useEffect, useState } from 'react';

import LangSwitcher from '@/components/LangSwitcher';
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';

import BurgerButton from '@/components/BurgerButton';
import BurgerMenu from '@/components/BurgerMenu';

import { TypeHeaderProps } from './types';

const Header: FC<TypeHeaderProps> = ({
  activePath,
  handleActivePath,
  handleLogoClick,
}) => {
  const headerRef = useRef<HTMLElement | null>(null);

  const [offset, setOffset] = useState<number>(0);
  const [isCloseModal, setIsCloseModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setIsCloseModal(!isCloseModal);
  };

  useEffect(() => {
    if (isCloseModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isCloseModal]);

  useEffect(() => {
    const element = headerRef?.current;
    if (element) {
      const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
          const height = entry.contentRect.height;
          setOffset(height);
        }
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }),
    [];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-10 bg-white"
    >
      <div className="container flex items-center justify-between py-[7px] tablet:py-[1.5px]">
        <Logo
          className="w-[77px] h-[50px] tablet:w-[111px] tablet:h-[77px]"
          handleClick={handleLogoClick}
        />

        <NavBar
          className="hidden desktop:block desktop:ml-auto"
          offset={offset}
          activePatch={activePath}
          onActivePatch={handleActivePath}
        />
        {!isCloseModal && (
          <LangSwitcher className="ml-auto mr-8 desktop:ml-[71px]" />
        )}
        <BurgerButton
          handleToggleModal={handleToggleModal}
          isCloseModal={isCloseModal}
        />
      </div>
      {isCloseModal && (
        <BurgerMenu
          activePatch={activePath}
          onActivePatch={handleActivePath}
          handleCloseModal={handleToggleModal}
          offset={offset}
        />
      )}
    </header>
  );
};

export default Header;
