import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import MonoQR from 'public/svg/monoQR.svg';
import Arrow from 'public/svg/arrow.svg';

const MonoTab: FC = () => {
  const { t } = useTranslation();

  return (
    <article className="tablet:flex tablet:justify-between tablet:items-center py-7 px-5 tablet:p-8 desktop:pl-[60px] desktop:pr-[140px] text-black-charcoal bg-white-light shadow-payment">
      <Link
        href="https://send.monobank.ua/jar/5AS8N3oQhB"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group focus:outline-accent focus:outline-offset-4"
      >
        <div className="tablet:w-[392px] desktop:w-[425px] flex items-center justify-between py-3 pl-5 pr-[23px] bg-yellow rounded">
          <p className="w-[150px] tablet:w-auto text-base tablet:text-sm desktop:text-lg leading-7 font-normal">
            {t('donate.link')}
          </p>
          <Arrow
            aria-label={t('donate.aria-goTo')}
            className="fill-accent group-hover:fill-accent-dark group-focus:fill-accent-dark"
          />
        </div>
      </Link>
      <div className="max-w-[280px] max-h-[280px] onlyMobile:mt-10 tablet:w-[152px] tablet:h-[152px] desktop:w-[200px] desktop:h-[200px] mx-auto tablet:mx-0">
        <MonoQR aria-label={t('donate.aria-monoQR')} />
      </div>
    </article>
  );
};

export default MonoTab;
