import { FC } from "react";
import { Link } from "react-scroll";

import { ScrollLinkProps } from "./types";

const ScrollLink: FC<ScrollLinkProps> = ({ path, children, offset = 0 }) => {
  return (
    <Link
      tabIndex={1}
      to={path}
      smooth={true}
      spy={true}
      duration={500}
      offset={offset}
      className="inline-block text-center w-full tablet:w-auto py-4 tablet:px-10 text-base font-medium leading-normal text-white rounded bg-accent hover:bg-accent-dark focus:bg-accent-dark focus:outline-none transition-colors cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
