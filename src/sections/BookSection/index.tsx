import { FC } from 'react';
import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';

import Heading from '@/components/Heading';
import LinkButton from '@/components/LinkButton';

const BookSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section id='#books'>
      <div className="container py-10 tablet:py-20 desktop:py-[100px] text-black-charcoal">
        <div className="desktop:grid desktop:grid-cols-2 desktop:gap-8">
          <div>
            <div className="text-4xl">
              <Heading weight="bold">{t('book.title')}</Heading>
            </div>
            <h3 className="mt-8 text-lg font-bold">{t('book.subtitle')}</h3>
            <div className="mt-8 onlyTablet:grid onlyTablet:grid-cols-2 onlyTablet:gap-8">
              <div className="desktop:w-[487px]">
                <Trans
                  className="text-base font-normal"
                  components={{ 1: <p />, 2: <p className="mt-6" /> }}
                >
                  {t('book.description')}
                </Trans>
                <p className="mt-8 font-bold desktop:mt-10">
                  {t('book.author')}
                </p>
                <div className="mt-10">
                  <LinkButton href="#">{t('btn.more')}</LinkButton>
                </div>
              </div>
              <div className="max-w[440px] flex justify-center mt-10 tablet:m-0 desktop:hidden">
                <Image
                  className="w-full rounded object-cover tablet:w-[336px] tablet:h-[416px]"
                  loading="lazy"
                  src="/images/book/book_m@2.jpg"
                  width="320"
                  height="396"
                  alt={t('book.alt')}
                />
              </div>
            </div>
          </div>
          <div className="hidden desktop:block">
            <Image
              className="object-cover rounded"
              loading="lazy"
              src="/images/book/book_d@2.jpg"
              width="593"
              height="493"
              alt={t('book.alt')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
