import { ReactNode } from 'react';

export interface NavLinkProps {
  isActive: boolean;
  path: string;
  children: ReactNode;
  offset?: number;
  handleClick?: (patch: string) => void;
}
