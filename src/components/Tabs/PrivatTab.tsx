import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Clipboard from 'public/svg/clipboard.svg';
import PrivatQR from 'public/svg/privatQR.svg';
import Arrow from 'public/svg/arrow.svg';
import Tick from 'public/svg/tick.svg';

const PrivatTab: FC = () => {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  useEffect(() => {
    if (showCopiedMessage) {
      const timer = setTimeout(() => {
        setShowCopiedMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showCopiedMessage]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('4246 0010 0396 3729');
    setClicked(true);
    setShowCopiedMessage(true);
  };

  return (
    <article className="tablet:flex tablet:justify-between tablet:items-center py-7 px-5 tablet:p-8 desktop:pl-[60px] desktop:pr-[140px] text-black-charcoal bg-white-light shadow-payment">
      <div>
        <div className="tablet:flex tablet:items-baseline tablet:mb-10">
          <h3 className="tablet:w-[88px] text-sm desktop:text-lg leading-7 font-bold mb-3 tablet:mb-0 tablet:mr-5 desktop:mr-10">
            {t('donate.card')}
          </h3>
          <div className="relative flex items-center justify-between tablet:w-[270px] desktop:w-[295px] py-3 pl-5 pr-[26px] mb-[29px] tablet:mb-0 bg-yellow rounded">
            <p className="text-base small:text-sm desktop:text-lg leading-7 font-semibold">
              4246 0010 0396 3729
            </p>
            {clicked ? (
              <div>
                <Tick aria-label={t('donate.aria-copiedCard')} />
                {showCopiedMessage && (
                  <span className="absolute top-full right-0 text-accent">
                    {t('donate.copied')}
                  </span>
                )}
              </div>
            ) : (
              <button className="focus:outline-accent focus:outline-offset-4">
                <Clipboard
                  aria-label={t('donate.aria-copy')}
                  className="cursor-pointer fill-accent hover:fill-accent-dark focus:fill-accent-dark"
                  onClick={handleCopyClick}
                />
              </button>
            )}
          </div>
        </div>
        <Link
          href="https://next.privat24.ua/payments/form/%7B%22token%22%3A%2287accea8-7d2c-48d5-a308-174fa1becc56%22%7D"
          target="_blank"
          rel="noopener noreferrer"
          className="group focus:outline-accent focus:outline-4 focus:outline-offset-4"
        >
          <div className="tablet:w-[392px] desktop:w-[425px] flex items-center justify-between mb-10 tablet:mb-0 py-3 pl-5 pr-[23px] bg-yellow rounded">
            <p className="w-[150px] tablet:w-auto text-base tablet:text-sm desktop:text-lg leading-7 font-normal">
              {t('donate.link')}
            </p>
            <Arrow
              aria-label={t('donate.aria-goTo')}
              className="fill-accent group-hover:fill-accent-dark group-focus:fill-accent-dark"
            />
          </div>
        </Link>
      </div>
      <div className="max-w-[280px] max-h-[280px] tablet:w-[152px] tablet:h-[152px] desktop:w-[200px] desktop:h-[200px] mx-auto tablet:mx-0">
        <PrivatQR />
      </div>
    </article>
  );
};

export default PrivatTab;
