import { FC } from 'react';

import FeedbackForm from '@/components/FeedbackForm';
import FeedbackDescription from '@/components/FeedbackDescription';

import styles from '@/sections/FeedbackSection/feedback.module.css';

const FeedbackSection: FC = () => {
  return (
    <section
      className={`py-10 tablet:py-[80px] desktop:pt-[100px] desktop:pb-[140px]  bg-circle tablet:bg-leafsTablet desktop:bg-leafsDesktop bg-[position:left_bottom,left_top] tablet:bg-[size:390px,72px] desktop:bg-[size:640px,72px] ${styles.box}`}
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
