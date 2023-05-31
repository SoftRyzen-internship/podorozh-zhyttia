import { FC } from 'react';

import Clipboard from 'public/svg/clipboard.svg';

const PayPalTab: FC = () => {
  return (
    <article className="tablet:flex tablet:justify-between tablet:items-baseline py-7 px-5 tablet:pt-8 tablet:pl-4 tablet:pr-[89px] tablet:pb-[124px] desktop:p-[60px] desktop:pr-[544px] desktop:pb-[152px] text-black-charcoal bg-white-light shadow-payment">
      <h3 className="text-sm left-7 font-bold desktop:text-lg mb-3">
        PayPal скринька:
      </h3>
      <div className="flex items-center justify-between tablet:w-[355px] desktop:w-[384px] py-3 pl-4 pr-[23px] bg-yellow rounded">
        <p className="text-xs tablet:text-sm desktop:text-lg left-7 font-semibold">
          chepurko.larysa@gmail.com
        </p>
        <Clipboard
          onClick={() =>
            navigator.clipboard.writeText('chepurko.larysa@gmail.com')
          }
        />
      </div>
    </article>
  );
};

export default PayPalTab;
