import { FC } from 'react';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { TypeNavigationLink } from '../../constants/navLinks/types';
import { navLinks } from '@/constants/navLinks/navLinks';

const BurgerMenu: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-yellow z-50 absolute right-0 w-full h-screen tablet:w-1/2 tablet:h-[521px] desktop:hidden">
      <div className="container">
        <div className="px-5 pt-10 tablet:max-w-[340px]">
          <ul>
            {navLinks.map(({ to, title }: TypeNavigationLink) => (
              <li
                key={title}
                className="mt-5 pb-2 border-b-[1px] border-b-accent text-lg text-black-charcoal hover:text-accent"
              >
                <Link href={to}>{t(title)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
