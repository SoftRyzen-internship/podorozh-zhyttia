import { FC, useRef, useEffect, useState } from 'react';

import LangSwitcher from '@/components/LangSwitcher';
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';

import BurgerButton from '@/components/BurgerButton';
import BurgerMenu from '@/components/BurgerMenu';

const Header: FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [offset, setOffset] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string | null>(null);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleActivePath = (path: string) => {
    setActivePath(path);
    handleCloseModal();
  };

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);

    if (!isOpenModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1280) {
      setIsOpenModal(false);
      document.body.classList.remove('overflow-hidden');
    }
  }, [windowWidth]);

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
        <Logo className="w-[77px] h-[50px] tablet:w-[111px] tablet:h-[77px]" />

        <NavBar
          activePatch={activePath}
          onActivePatch={handleActivePath}
          className="hidden desktop:block desktop:ml-auto"
          offset={offset}
        />
        {!isOpenModal && (
          <LangSwitcher className="ml-auto mr-8 desktop:ml-[71px]" />
        )}
        <BurgerButton
          handleToggleModal={handleToggleModal}
          isOpenModal={isOpenModal}
        />
      </div>
      {isOpenModal && (
        <BurgerMenu
          activePatch={activePath}
          onActivePatch={setActivePath}
          handleCloseModal={handleCloseModal}
          offset={offset}
        />
      )}
    </header>
  );
};

export default Header;
