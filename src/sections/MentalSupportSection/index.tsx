import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Slider from '@/components/Slider';
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
        <Slider allPsychologists={allPsychologists} />
        <div className="mt-10 desktop:mt-[60px] flex justify-center">
          <ScrollLink path="#feedback">{t('btn.talk')}</ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default MentalSupportSection;
