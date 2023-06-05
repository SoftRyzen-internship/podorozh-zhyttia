import { FC } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

import { ILogoProps } from './types';

import logoSvg from 'public/images/logo.png';

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <Link
      className={`block relative cursor-pointer hover:scale-110 ${className}`}
      to="#hero"
      smooth={true}
      spy={true}
      duration={500}
    >
      <Image className="object-contain" src={logoSvg} fill={true} alt="alt" />
    </Link>
  );
};

export default Logo;
