import { FC } from 'react';

import PryvatQR from 'public/svg/pryvatQR.svg';
import Arrow from 'public/svg/arrow.svg';

const MonoTab: FC = () => {
  return (
    <article className="tablet:flex tablet:justify-between tablet:items-center py-7 px-5 tablet:p-8 desktop:pl-[60px] desktop:pr-[140px] text-black-charcoal bg-white-light shadow-payment">
      <div className="tablet:w-[392px] desktop:w-[425px] flex items-center justify-between mb-10 tablet:mb-0 py-3 pl-5 pr-[23px] bg-yellow">
        <p className="w-[150px] tablet:w-auto text-base tablet:text-sm desktop:text-lg leading-7 font-normal">
          Посилання на онлайн-переказ
        </p>
        <Arrow />
      </div>
      <div className="max-w-[280px] max-h-[280px] tablet:w-[152px] tablet:h-[152px] desktop:w-[200px] desktop:h-[200px] mx-auto tablet:mx-0">
        <PryvatQR />
      </div>
    </article>
  );
};

export default MonoTab;
