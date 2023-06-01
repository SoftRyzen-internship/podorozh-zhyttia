import { FC } from 'react';

import { useTranslation } from 'next-i18next';

import Heading from '@/components/Heading';
import FeedbackItem from '@/components/FeedbackDescription/FeedbackItem';

const FeedbackDescription: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mb-10 tablet:mb-0 tablet:w-[350px] desktop:w-[500px]">
      <Heading>{t('feedback.title')}</Heading>
      <ul className="mt-8 tablet:mt-10 desktop:mt-12 flex flex-col gap-5 tablet:w-[330px] desktop:w-[410px]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <FeedbackItem
              key={i}
              number={i + 1}
              text={t(`feedback.step${i + 1}`)}
            />
          ))}
      </ul>
    </div>
  );
};

export default FeedbackDescription;
