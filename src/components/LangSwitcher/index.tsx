import { useRouter } from 'next/router';

import style from './styles.module.css';

const LangSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const handleLangChange = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <ul className="flex gap-6 font-semibold">
      <li>
        <button
          onClick={() => handleLangChange('uk')}
          className={
            `${locale === 'uk' ? 'text-accent' : 'text-black-charcoal'} ` +
            style.verticalLine
          }
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
          }`}
          disabled={locale === 'en'}
        >
          ENG
        </button>
      </li>
    </ul>
  );
};

export default LangSwitcher;
