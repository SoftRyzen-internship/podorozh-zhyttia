import { FC } from 'react';
import Link from 'next/link';

import { LinkButtonProps } from './types';

const LinkButton: FC<LinkButtonProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`inline-block text-center w-full tablet:w-[262px] h-14 py-4 px-10 text-base font-medium leading-normal text-white rounded bg-accent hover:bg-accent-dark focus:bg-accent-dark focus:outline-accent focus:outline-offset-4 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
