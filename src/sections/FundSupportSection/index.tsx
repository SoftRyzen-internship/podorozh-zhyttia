import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import LinkButton from '@/components/LinkButton';

const FundSupportSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="fund"
      className="pb-10 tablet:pb-20 desktop:pb-[100px] text-black-charcoal"
    >
      <div className="container">
        <div className="desktop:w-[1008px] desktop:mx-auto tablet:flex justify-between items-center py-8 px-5 tablet:p-7 desktop:py-10 desktop:px-[72px] border border-accent rounded">
          <div>
            <h2 className="tablet:w-[300px] desktop:w-auto px-[15px] tablet:px-0 text-lg tablet:text-xl desktop:text-2xl leading-7 tablet:leading-8 font-semibold text-center tablet:text-left">
              {t('support.title')}
            </h2>
            <p className="tablet:w-[353px] desktop:w-[500px] text-base leading-6 font-normal mt-7 text-center tablet:text-left">
              {t('support.description')}
            </p>
          </div>
          <LinkButton
            className="onlyMobile:mt-8"
            href="https://next.privat24.ua/payments/form/%7B%22token%22%3A%2287accea8-7d2c-48d5-a308-174fa1becc56%22%7D"
          >
            {t('btn.support')}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default FundSupportSection;
