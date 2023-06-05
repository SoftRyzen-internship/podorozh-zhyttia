import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { typeAddressProps } from './types';

const Address: FC<typeAddressProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={`${className}`}>
      <h3 className="text-lg text-accent font-bold leading-7 mb-7">
        {t('footer.contacts')}
      </h3>
      <address>
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              href="tel:+380956642113"
              className="hover:text-accent hover:duration-300 focus:outline-accent focus:outline-offset-4 focus:text-accent"
            >
              +380956642113
            </Link>
          </li>
          <li>
            <Link
              href="mailto:chepurko.larysa@gmail.com"
              className="underline hover:text-accent hover:duration-300 focus:outline-accent focus:outline-offset-4 focus:text-accent"
            >
              chepurko.larysa@gmail.com
            </Link>
          </li>
          <li>
            <p className="max-w-[240px]">{t('footer.address')}</p>
          </li>
        </ul>
      </address>
    </div>
  );
};

export default Address;
