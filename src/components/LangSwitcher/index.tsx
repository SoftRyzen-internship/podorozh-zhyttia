import { FC } from 'react';
import { useRouter } from 'next/router';

import { ILangSwitcherProps } from './types';

const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const router = useRouter();
  const { locale } = router;
  const classes = `flex gap-6 text-base font-semibold ${className}`;

  const handleLangChange = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <ul className={classes}>
      <li>
        <button
          onClick={() => handleLangChange('uk')}
          className={`${
            locale === 'uk' ? 'text-accent' : 'text-black-charcoal'
          } relative after:absolute after:content-[''] after:w-[1px] after:h-6 after:bg-[#c3c3c3] after:-right-3 after:pointer-events-none hover:text-accent focus:text-accent focus:outline-accent focus:outline-offset-4 transition`}
          disabled={locale === 'uk'}
        >
          UA
        </button>
      </li>
      <li>
        <button
          onClick={() => handleLangChange('en')}
          className={`${
            locale === 'en' ? 'text-accent' : 'text-black-charcoal'
          } hover:text-accent focus:text-accent focus:outline focus:outline-accent focus:outline-4 focus:outline-offset-4 transition`}
          disabled={locale === 'en'}
        >
          ENG
        </button>
      </li>
    </ul>
  );
};

export default LangSwitcher;
