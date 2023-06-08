import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { SwiperSlide } from 'swiper/react';

import Slider from '@/components/Slider';
import SlidePsychologist from '@/components/SlidePsychologist';
import Heading from '@/components/Heading';
import ScrollLink from '@/components/ScrollLink';

import { TypePsychologist } from '@/types';

interface MentalSupportSectionProps {
  allPsychologists: TypePsychologist[];
}

const MentalSupportSection: FC<MentalSupportSectionProps> = ({
  allPsychologists,
}) => {
  const { t } = useTranslation();

  return (
    <section
      id="#psyhological"
      className={`bg-circle py-10 tablet:py-20 desktop:[100px]`}
    >
      <div className="container">
        <Heading className="flex tablet:justify-start desktop:justify-start">
          {t('psyhological_help')}
        </Heading>
        <Slider
          nextButtonSelector="psychology-btn-next"
          prevButtonSelector="psychology-btn-prev"
        >
          {allPsychologists.map(
            ({ id, name, description, psychologistPhoto }) => (
              <SwiperSlide key={id}>
                <SlidePsychologist
                  id={id}
                  name={name}
                  description={description}
                  psychologistPhoto={psychologistPhoto}
                />
              </SwiperSlide>
            )
          )}
        </Slider>
        <div className="mt-10 desktop:mt-[60px] flex justify-center">
          <ScrollLink path="#feedback" offset={-50}>
            {t('btn.talk')}
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default MentalSupportSection;
