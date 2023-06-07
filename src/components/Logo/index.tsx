import { FC } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';

import { ILogoProps } from './types';

import logoSvg from 'public/images/logo.png';

const Logo: FC<ILogoProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Link
      className={`block relative cursor-pointer hover:scale-110 ${className} focus:outline-accent`}
      to="#hero"
      smooth={true}
      spy={true}
      duration={500}
      tabIndex={0}
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
