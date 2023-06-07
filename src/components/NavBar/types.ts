export interface INavBarProps {
  offset?: number;
  className?: string;
  activePatch: string | null;
  onActivePatch: (to: string) => void;
}
