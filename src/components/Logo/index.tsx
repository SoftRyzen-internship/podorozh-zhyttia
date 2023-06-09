import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';

import { ILogoProps } from './types';

import logoSvg from 'public/images/logo.png';

const Logo: FC<ILogoProps> = ({ handleClick, className }) => {
  const { t } = useTranslation();
  return (
    <Link
      onClick={handleClick}
      className={`block relative cursor-pointer hover:scale-110 ${className} focus:outline-accent`}
      href={'/'}
    >
      <Image
        className="object-contain"
        src={logoSvg}
        fill={true}
        alt={`${t('logo.alt')}`}
      />
    </Link>
  );
};

export default Logo;
