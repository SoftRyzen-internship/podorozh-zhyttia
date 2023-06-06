import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

import Clipboard from 'public/svg/clipboard.svg';
import Tick from 'public/svg/tick.svg';

const PayPalTab: FC = () => {
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
    navigator.clipboard.writeText('chepurko.larysa@gmail.com');
    setClicked(true);
    setShowCopiedMessage(true);
  };

  return (
    <article className="tablet:flex tablet:justify-between tablet:items-baseline py-7 px-5 tablet:pt-10 tablet:pl-8 tablet:pr-[89px] tablet:pb-[124px] desktop:p-[60px] desktop:pr-[544px] desktop:pb-[152px] text-black-charcoal bg-white-light shadow-payment">
      <h3 className="text-sm left-7 font-bold desktop:text-lg mb-3">
        PayPal {t('donate.box')}:
      </h3>
      <div className="relative flex items-center justify-between tablet:w-[355px] desktop:w-[384px] p-3 small:pl-4 small:pr-5 bg-yellow rounded">
        <p className="text-tiny small:text-xs tablet:text-sm desktop:text-lg left-7 font-semibold">
          chepurko.larysa@gmail.com
        </p>
        {clicked ? (
          <div>
            <Tick aria-label={t('donate.aria-copiedBox')} />
            {showCopiedMessage && (
              <span className="absolute top-full right-0 text-xs small:text-base text-accent">
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
    </article>
  );
};

export default PayPalTab;
