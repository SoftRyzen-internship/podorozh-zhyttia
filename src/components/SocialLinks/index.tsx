import React from 'react';
import Link from 'next/link';

import Telegram from 'public/svg/telegram.svg';
import Instagram from 'public/svg/instagram.svg';
import Facebook from 'public/svg/facebook.svg';
import Youtube from 'public/svg/youtube.svg';

const SocialLinks = () => {
  return (
    <ul className="flex gap-5">
      <li>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          aria-label="Visit our instagram page"
        >
          <Instagram />
        </Link>
      </li>
      <li>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          aria-label="Visit our telegram page"
        >
          <Telegram />
        </Link>
      </li>
      <li>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          aria-label="Visit our facebook page"
        >
          <Facebook />
        </Link>
      </li>
      <li>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          aria-label="Visit our youtube page"
        >
          <Youtube />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
