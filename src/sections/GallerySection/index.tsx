import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import SliderGallery from '@/components/SliderGallery';
import Heading from '@/components/Heading';

import BunnerApi from './api';

const GallerySection: FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="#gallery"
      className="py-10 tablet:py-20 desktop:py-[100px] border-b-[1px] border-b-accent"
    >
      <div className="container">
        <Heading className="flex justify-center tablet:justify-start desktop:justify-start">
          {t('gallery')}
        </Heading>
        <SliderGallery BunnerApi={BunnerApi} />
      </div>
    </section>
  );
};

export default GallerySection;
