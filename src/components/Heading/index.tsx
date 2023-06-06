import { FC } from 'react';

import { IHeadingProps } from './types';

const Heading: FC<IHeadingProps> = ({ children, className }) => {
  return (
    <h2
      className={`text-xl tablet:text-2xl desktop:text-4xl leading-[1.33] tablet:leading-[1.14] desktop:leading-[1.125] text-black-charcoal ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
