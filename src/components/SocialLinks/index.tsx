import { FC } from 'react';
import Link from 'next/link';

import { SOCIAL_MEDIA } from './constants';

const SocialLinks: FC = () => {
  return (
    <ul className="flex gap-5">
      {SOCIAL_MEDIA.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <Link
            rel="noopener noreferrer"
            aria-label={label}
            href={href}
            target="_blank"
            className="group w-10 h-10 flex items-center justify-center rounded border border-black-midnight hover:border-accent focus:outline-none focus:border-accent hover:duration-300"
          >
            <Icon className="fill-black-midnight group-hover:fill-accent group-focus:fill-accent group-hover:duration-300" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;