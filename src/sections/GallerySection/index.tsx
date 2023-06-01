import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import SliderGallery from '@/components/SliderGallery';
import Heading from '@/components/Heading';

import BunnerApi from './api';

const GallerySection: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 border-b-[1px] border-b-accent">
      <div className="container">
        <div className="flex justify-center tablet:justify-start desktop:justify-start">
          <Heading>{t('gallery')}</Heading>
        </div>
        <SliderGallery BunnerApi={BunnerApi} />
      </div>
    </section>
  );
};

export default GallerySection;
