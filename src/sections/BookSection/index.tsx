import { FC } from 'react';
import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';

import Heading from '@/components/Heading';
import LinkButton from '@/components/LinkButton';

const BookSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#books">
      <div className="container py-10 tablet:py-20 desktop:py-[100px] text-black-charcoal">
        <div className="desktop:grid desktop:grid-cols-2 desktop:gap-8">
          <div>
            <Heading className="text-4xl font-bold">{t('book.title')}</Heading>
            <h3 className="mt-8 text-lg font-bold">{t('book.subtitle')}</h3>
            <div className="mt-8 onlyTablet:grid onlyTablet:grid-cols-2 onlyTablet:gap-8">
              <div className="desktop:w-[487px]">
                <div className="onlyTablet:h-[264px] desktop:h-[192px]">
                  <Trans
                    className="text-base font-normal h-[264]"
                    components={{ 1: <p />, 2: <p className="mt-6" /> }}
                  >
                    {t('book.description')}
                  </Trans>
                </div>
                <p className="mt-8 font-bold desktop:mt-10">
                  {t('book.author')}
                </p>
                <LinkButton href="https://yakty.com.ua" className="mt-10">
                  {t('btn.more')}
                </LinkButton>
              </div>
              <div className="relative min-w-[280px] min-h-[346.5px] max-w[440px] flex justify-center mt-10 tablet:m-0 desktop:hidden">
                <Image
                  className="w-full rounded object-cover tablet:w-[336px] tablet:h-[416px]"
                  loading="lazy"
                  src="/images/book/book_d@x2.jpg"
                  width={592}
                  height={493}
                  alt={t('book.alt')}
                />
              </div>
            </div>
          </div>
          <div className="relative hidden desktop:block">
            <Image
              className="object-cover rounded"
              loading="lazy"
              src="/images/book/book_d@x2.jpg"
              width={592}
              height={493}
              alt={t('book.alt')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
