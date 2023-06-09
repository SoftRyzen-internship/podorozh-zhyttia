import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import ScrollLink from '@/components/ScrollLink';

import { IHeroProps } from './types';

import s from './HeroSection.module.css';

const HeroSection: FC<IHeroProps> = ({ banner }) => {
  const { t } = useTranslation();

  const { photo } = banner;

  return (
    <section
      id="#hero"
      className="onlyMobile:pb-10 pt-[104px] tablet:pt-20 text-black-charcoal bg-yellow"
    >
      <div className="container tablet:flex tablet:px-0">
        <div
          className={`${s.background} tablet:pl-8 tablet:w-[400px] desktop:w-[665px] onlyTablet:pr-[31px] tablet:pt-[60px] desktop:pt-[80px]`}
        >
          <h1 className="onlyMobile:max-w-[400px] text-[23px] small:text-[26px] tablet:text-2xl desktop:text-5xl leading-10 tablet:leading-[48px] desktop:leading-[68px] font-bold">
            {t('hero.title')}
          </h1>
          <p className="desktop:w-[460px] text-base leading-6 font-normal mt-10 tablet:mt-8 desktop:mt-10">
            {t('hero.description')}
          </p>
          <div className="mt-10 tablet:mt-8 desktop:mt-10">
            <ScrollLink path="donate" offset={-40}>
              {t('btn.donate')}
            </ScrollLink>
          </div>
        </div>
        <div className="relative small:w-[320px] h-[369px] mobile:w-[440px] mobile:h-[489px] tablet:w-[368px] tablet:h-[521px] desktop:h-[718px] onlyMobile:mt-10 desktop:w-[624px]">
          <Image
            src={photo.url}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            priority
            className="object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
