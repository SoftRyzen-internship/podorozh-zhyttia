import { FC } from "react";
import Link from "next/link";

import { LinkButtonProps } from "./types";

const LinkButton: FC<LinkButtonProps> = ({
  href,
  children,
  width = "full",
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block text-center w-${width} tablet:w-[262px] h-14 py-4 px-10 text-base font-medium leading-normal text-white rounded bg-accent hover:bg-accent-dark focus:bg-accent-dark focus:outline-none transition-colors`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
