import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import ScrollLink from '@/components/ScrollLink';

import { IHeroProps } from './types';

import s from './HeroSection.module.css';

const HeroSection: FC<IHeroProps> = ({ allBanners }) => {
  const { t } = useTranslation();
  const { photo } = allBanners[0];

  return (
    <section className="onlyMobile:pb-10 pt-[104px] tablet:pt-20 text-black-charcoal bg-yellow">
      <div className="container tablet:flex tablet:pr-0">
        <div
          className={`${s.background} tablet:w-[50%] onlyTablet:pr-[31px] tablet:pt-[60px] desktop:pt-[80px]`}
        >
          <h1 className="onlyMobile:max-w-[400px] text-[23px] small:text-[26px] tablet:text-2xl desktop:text-5xl leading-10 tablet:leading-[48px] desktop:leading-[68px] font-bold mb-10 tablet:mb-8 desktop:mb-10">
            {t('hero.title')}
          </h1>
          <p className="desktop:w-[460px] text-base leading-6 font-normal mb-10 tablet:mb-8 desktop:mb-10">
            {t('hero.description')}
          </p>
          <ScrollLink path="donate">{t('btn.donate')}</ScrollLink>
        </div>
        <div className="relative small:w-[320px] h-[369px] mobile:w-[440px] mobile:h-[489px] tablet:w-[50%] tablet:h-[521px] desktop:h-[718px] onlyMobile:mt-10">
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="small:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
