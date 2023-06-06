import { ReactNode } from "react";

export interface ScrollLinkProps {
  path: string;
  children: ReactNode;
  offset?: number;
}
