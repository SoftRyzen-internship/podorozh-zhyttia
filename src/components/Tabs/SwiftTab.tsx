import { FC } from 'react';

import s from './Tabs.module.css';

const SwiftTab: FC = () => {
  return (
    <article className="desktop:flex desktop:gap-24 py-7 px-5 tablet:py-11 tablet:px-8 desktop:p-[60px] text-black-charcoal bg-white-light shadow-payment">
      <div className="mb-[82px] tablet:mb-[60px] desktop:mb-0">
        <h3 className="text-lg tablet:text-xl desktop:text-2xl leading-7 tablet:leading-8 font-bold mb-6 desktop:mb-10">
          € <span className="text-accent">EUR</span>
        </h3>

        <h4 className={s.title}>Company name:</h4>
        <p className={s.text}>БО БФ ПОДОРОЖ ЖИТТЯ</p>

        <h4 className={s.title}>IBANCode:</h4>
        <p className={s.text}>UA523052990000026000035028102</p>

        <h4 className={s.title}>Name of the bank:</h4>
        <p className={s.text}>
          SC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
        </p>

        <h4 className={s.title}>Bank SWIFT Code:</h4>
        <p className={s.text}>PBANUA2X </p>

        <h4 className={s.title}>Company address:</h4>
        <p className={`${s.text} ${s.itemGap}`}>
          UA 04214 м Київ вул Героїв Днiпра б.53 кв.3
        </p>

        <h4 className={s.title}>Account in the correspondent bank</h4>
        <p className={s.text}>400886700401</p>

        <h4 className={s.title}>SWIFT Code of the correspondent bank</h4>
        <p className={s.text}>COBADEFF</p>

        <h4 className={s.title}>Correspondent bank</h4>
        <p className={`${s.text} ${s.lastItem}`}>
          Commerzbank AG, Frankfurt am Main, Germany
        </p>
      </div>

      <div>
        <h3 className="text-lg tablet:text-xl desktop:text-2xl leading-7 tablet:leading-8 font-bold mb-6 desktop:mb-10">
          $ <span className="text-accent">USD</span>
        </h3>

        <h4 className={s.title}>Company name:</h4>
        <p className={s.text}>БО БФ ПОДОРОЖ ЖИТТЯ</p>

        <h4 className={s.title}>IBANCode:</h4>
        <p className={s.text}>UA173052990000026002045025193</p>

        <h4 className={s.title}>Name of the bank:</h4>
        <p className={s.text}>
          SC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
        </p>

        <h4 className={s.title}>Bank SWIFT Code:</h4>
        <p className={s.text}>PBANUA2X </p>

        <h4 className={s.title}>Company address:</h4>
        <p className={`${s.text} ${s.itemGap}`}>
          UA 04214 м Київ вул Героїв Днiпра б.53 кв.3
        </p>

        <h4 className={s.title}>Account in the correspondent bank</h4>
        <p className={s.text}>001-1-000080</p>

        <h4 className={s.title}>SWIFT Code of the correspondent bank</h4>
        <p className={s.text}>CHASUS33</p>

        <h4 className={s.title}>Correspondent bank</h4>
        <p className={`${s.text} ${s.lastItem}`}>
          JP Morgan Chase Bank, New York ,USA
        </p>
      </div>
    </article>
  );
};

export default SwiftTab;
