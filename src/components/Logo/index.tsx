import { FC } from 'react';
import LogoSvg from 'public/svg/logo.svg';

type TypeLogoProps = {
  width: number;
  tabletWidth: number;
  desktopWidth: number;
};

const Logo: FC<TypeLogoProps> = ({
  width = 100,
  tabletWidth = 200,
  desktopWidth = 200,
}) => {
  console.log(width, tabletWidth, desktopWidth);
  return (
    <LogoSvg
      // className={`hover:cursor-pointer w-[${width}px] tablet:w-[${tabletWidth}px] desktop:w-[${desktopWidth}px]`}
      className="w-[100px]"
    />
  );
};

export default Logo;
