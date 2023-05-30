import { ReactNode } from "react";

export interface LinkButtonProps {
  children: ReactNode;
  href: string;
  width?: "full" | "auto";
}
