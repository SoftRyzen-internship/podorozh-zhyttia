import { FC } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

import logoSvg from 'public/images/logo.png';

type TypeLogoProps = {
  width?: number;
  height?: number;
  tabletWidth?: number;
  tabletHeight?: number;
};

const Logo: FC<TypeLogoProps> = ({
  width = 50,
  height = 50,
  tabletWidth = 100,
  tabletHeight = 100,
}) => {
  console.log(width, tabletWidth);
  return (
    <Link
      className={`block w-[${width}px] h-[${height}px] tablet:w-[${tabletWidth}px] tablet:h-[${tabletHeight}px] relative`}
      to="#hero"
      smooth={true}
      spy={true}
      duration={500}
    >
      <Image className="object-cover" src={logoSvg} fill={true} alt="alt" />
    </Link>
  );
};

export default Logo;
