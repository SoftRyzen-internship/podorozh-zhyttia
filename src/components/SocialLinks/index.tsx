import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { SOCIAL_MEDIA } from './constants';
import { TypeSocialLinksProps } from './types';

const SocialLinks: FC<TypeSocialLinksProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <ul className={`flex gap-5 ${className}`}>
      {SOCIAL_MEDIA.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <Link
            rel="noopener noreferrer nofollow"
            href={href}
            target="_blank"
            className="group w-10 h-10 flex items-center justify-center rounded border border-black-midnight hover:border-accent focus:outline-accent focus:border-accent hover:duration-300"
          >
            <Icon
              aria-label={t(label) as string}
              className="fill-black-midnight group-hover:fill-accent group-focus:fill-accent group-hover:duration-300"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
