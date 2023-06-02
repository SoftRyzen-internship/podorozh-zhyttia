import { FC } from 'react';

import { useTranslation } from 'next-i18next';

import SocialLinks from '@/components/SocialLinks';
import Address from '@/components/Address';
import Logo from '@/components/Logo';

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="#contacts" className="pt-10 pb-5 tablet:py-[60px]">
      <div className="container relative flex flex-col items-center justify-between text-center tablet:text-left onlyTablet:flex-wrap tablet:flex-row onlyTablet:items-end desktop:items-start desktop:gap-8">
        <div className="desktop:w-1/3 onlyTablet:absolute onlyTablet:top-0 onlyTablet:left-8">
          <Logo className="w-[100px] h-[65px] desktop:w-[154px] desktop:h-[100px]" />
        </div>
        <Address className="mt-10 tablet:w-1/2 tablet:pl-4 tablet:mt-0 desktop:w-1/3 onlyTablet:order-1" />
        <div className="mt-10 desktop:w-1/3 desktop:mt-0 desktop:pl-[104px]">
          <h3 className="text-lg font-bold leading-7 text-accent mb-7">
            {t('footer.social')}
          </h3>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
