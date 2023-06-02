import { FC } from 'react';

import { useTranslation } from 'next-i18next';

import SocialLinks from '@/components/SocialLinks';
import Address from '@/components/Address';
import Logo from '@/components/Logo';

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-10 pb-5 tablet:py-[60px]">
      <div className="relative container text-center tablet:text-left flex flex-col justify-between items-center onlyTablet:flex-wrap tablet:flex-row onlyTablet:items-end desktop:items-start desktop:gap-8">
        <div className="desktop:w-1/3 onlyTablet:absolute onlyTablet:top-0 onlyTablet:left-8">
          <Logo width={100} tabletWidth={200} desktopWidth={200} />
        </div>
        <div className="tablet:w-1/2 tablet:pl-4 tablet:mt-0 desktop:w-1/3 mt-10 onlyTablet:order-1">
          <Address />
        </div>
        <div className="mt-10 desktop:w-1/3 desktop:mt-0 desktop:pl-[104px]">
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
