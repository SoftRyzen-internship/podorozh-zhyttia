import { FC } from 'react';

import { useTranslation } from 'next-i18next';

import SocialLinks from '@/components/SocialLinks';
import Address from '@/components/Address';

import Logo from 'public/svg/logo.svg';

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-10 pb-5 tablet:py-[60px]">
      <div className="relative container text-center onlyTablet:text-left flex flex-col justify-between items-center onlyTablet:flex-wrap tablet:flex-row onlyTablet:items-end desktop:items-start">
        <div className="onlyTablet:absolute onlyTablet:top-0 onlyTablet:left-8">
          <Logo />
        </div>
        <div className="mt-10 tablet:mt-0 onlyTablet:order-1">
          <Address />
        </div>
        <div className="mt-10 desktop:mt-0">
          <h3 className="text-lg text-accent font-bold leading-7 mb-7">
            {t('footer.social')}
          </h3>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
