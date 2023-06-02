import { FC, useRef, useEffect, useState } from 'react';

import LangSwitcher from '@/components/LangSwitcher';
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';

import BurgerButton from '@/components/BurgerButton';
import BurgerMenu from '@/components/BurgerMenu';

const Header: FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState<number>(0);

  const [closeModal, setCloseModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    setCloseModal(!closeModal);
  };

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
      <div className="container flex justify-between items-center py-[7px] tablet:py-1">
        <Logo width={77} height={50} tabletWidth={111} tabletHeight={72} />
        <NavBar
          className="hidden desktop:block desktop:ml-auto"
          offset={offset}
        />
        {!closeModal && (
          <LangSwitcher className="ml-auto mr-8 desktop:ml-[71px]" />
        )}
        <BurgerButton
          handleCloseModal={handleCloseModal}
          closeModal={closeModal}
        />
      </div>
      {closeModal && <BurgerMenu />}
    </header>
  );
};

export default Header;
