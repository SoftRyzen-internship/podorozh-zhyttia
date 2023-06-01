import { FC } from 'react';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

const Address: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-lg text-accent font-bold leading-7 mb-7">
        {t('footer.contacts')}
      </h3>
      <address>
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              href="tel:+380956642113"
              className="hover:text-accent hover:duration-300 focus:outline-none focus:text-accent"
            >
              +380956642113
            </Link>
          </li>
          <li>
            <Link
              href="mailto:chepurko.larysa@gmail.com"
              className="underline hover:text-accent hover:duration-300 focus:outline-none focus:text-accent"
            >
              chepurko.larysa@gmail.com
            </Link>
          </li>
          <li>
            <p>{t('footer.address')}</p>
          </li>
        </ul>
      </address>
    </div>
  );
};

export default Address;
