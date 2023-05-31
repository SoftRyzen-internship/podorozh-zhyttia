import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Clipboard from 'public/svg/clipboard.svg';
import PryvatQR from 'public/svg/pryvatQR.svg';
import Arrow from 'public/svg/arrow.svg';

const PryvatTab: FC = () => {
  const { t } = useTranslation();

  return (
    <article className="tablet:flex tablet:justify-between tablet:items-center py-7 px-5 tablet:p-8 desktop:pl-[60px] desktop:pr-[140px] text-black-charcoal bg-white-light shadow-payment">
      <div>
        <div className="tablet:flex tablet:items-baseline tablet:mb-10">
          <h3 className="tablet:w-[88px] text-sm desktop:text-lg leading-7 font-bold mb-3 tablet:mb-0 tablet:mr-5 desktop:mr-10">
            {t('donate.card')}
          </h3>
          <div className="flex items-center justify-between tablet:w-[270px] desktop:w-[295px] py-3 pl-5 pr-[26px] mb-[29px] tablet:mb-0 bg-yellow rounded">
            <p className="text-sm leading-7 font-semibold desktop:text-lg">
              4246 0010 0396 3729
            </p>
            <Clipboard
              onClick={() =>
                navigator.clipboard.writeText('4246 0010 0396 3729')
              }
            />
          </div>
        </div>
        <Link href="/">
          <div className="tablet:w-[392px] desktop:w-[425px] flex items-center justify-between mb-10 tablet:mb-0 py-3 pl-5 pr-[23px] bg-yellow rounded">
            <p className="w-[150px] tablet:w-auto text-base tablet:text-sm desktop:text-lg leading-7 font-normal">
              {t('donate.link')}
            </p>
            <Arrow />
          </div>
        </Link>
      </div>
      <div className="max-w-[280px] max-h-[280px] tablet:w-[152px] tablet:h-[152px] desktop:w-[200px] desktop:h-[200px] mx-auto tablet:mx-0">
        <PryvatQR />
      </div>
    </article>
  );
};

export default PryvatTab;
