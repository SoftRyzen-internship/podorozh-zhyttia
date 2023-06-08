import { FC } from 'react';

import { useTranslation } from 'next-i18next';

import SocialLinks from '@/components/SocialLinks';
import Address from '@/components/Address';
import Logo from '@/components/Logo';

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="#contacts" className="pt-10 pb-5 tablet:py-[60px]">
      <div className="container relative flex flex-col items-center  text-center tablet:text-left tablet:flex-row onlyTablet:items-end desktop:items-start onlyTablet:gap-8">
        <div className=" onlyTablet:absolute onlyTablet:top-0 onlyTablet:left-8 desktop:mr-[262px]">
          <Logo className="w-[100px] h-[65px] desktop:w-[154px] desktop:h-[100px]" />
        </div>
        <Address className="mt-10 onlyTablet:w-1/2 tablet:mt-0  onlyTablet:order-1 desktop:mr-[262px]" />
        <div className="mt-10 onlyTablet:w-1/2  desktop:mt-0">
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
