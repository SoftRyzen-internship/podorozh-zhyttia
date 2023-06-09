export interface INavBarProps {
  offset?: number;
  className?: string;
  activePath: string | null;
  onActivePath: (to: string) => void;
}
