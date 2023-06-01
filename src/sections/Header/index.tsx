import LangSwitcher from '@/components/LangSwitcher';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header>
      <div className="container flex items-center justify-between h-14">
        HeaderSection
        <LangSwitcher />
      </div>
    </header>
  );
};

export default Header;
