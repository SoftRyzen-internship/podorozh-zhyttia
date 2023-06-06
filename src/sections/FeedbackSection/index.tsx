import { FC } from 'react';

import FeedbackForm from '@/components/FeedbackForm';
import FeedbackDescription from '@/components/FeedbackDescription';

const FeedbackSection: FC = () => {
  return (
    <section id="#feedback" className="bg-circle bg-repeat bg-[size:72px]">
      <div className="container tablet:bg-leafsTablet desktop:bg-leafsDesktop bg-no-repeat bg-left-bottom py-10 tablet:py-[80px] desktop:pt-[100px] desktop:pb-[140px] tablet:bg-[size:390px] desktop:bg-[size:640px]">
        <div className="tablet:flex justify-between desktop:pr-[105px]">
          <FeedbackDescription />
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
};
export default FeedbackSection;
