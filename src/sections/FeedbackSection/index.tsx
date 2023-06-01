import { FC } from 'react';

import FeedbackForm from '@/components/FeedbackForm';
import FeedbackDescription from '@/components/FeedbackDescription';

import styles from '@/sections/FeedbackSection/feedback.module.css';

const FeedbackSection: FC = () => {
  return (
    <section
      className={`${styles.box} py-10 tablet:py-[80px] desktop:pt-[100px] desktop:pb-[140px]`}
    >
      <div className="container">
        <div className="tablet:flex justify-between desktop:pr-[105px]">
          <FeedbackDescription />
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
