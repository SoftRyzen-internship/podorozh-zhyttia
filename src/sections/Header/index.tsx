import { FC, useRef, useEffect, useState } from 'react';

import LangSwitcher from '@/components/LangSwitcher';
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';

const Header: FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState<number>(0);

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
      <div className="container flex items-center py-[7px] tablet:py-1">
        {/* <div className="w-[77px] h-[50px] tablet:w-[111px] tablet:h-[72px] outline-dotted">
          LOGO
        </div> */}
        <Logo width={77} height={50} tabletWidth={111} tabletHeight={72} />
        <NavBar
          className="hidden desktop:block desktop:ml-auto"
          offset={offset}
        />
        <LangSwitcher className="ml-auto desktop:ml-[71px]" />
        <div className="ml-[37px] tablet:ml-[45px] w-[30px] h-5 outline-dotted desktop:hidden">
          M
        </div>
      </div>
    </header>
  );
};

export default Header;
