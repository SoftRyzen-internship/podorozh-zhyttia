import { useRouter } from 'next/router';

const LangSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const handleLangChange = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <ul className="flex gap-6 text-base font-semibold">
      <li>
        <button
          onClick={() => handleLangChange('uk')}
          className={`${
            locale === 'uk' ? 'text-accent' : 'text-black-charcoal'
          } relative after:absolute after:content-[''] after:w-[1px] after:h-6 after:bg-[#c3c3c3] after:-right-3 after:pointer-events-none`}
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
