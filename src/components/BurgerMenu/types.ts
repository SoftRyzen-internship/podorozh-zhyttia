export type TypeBurgerMenuProps = {
  handleCloseModal: () => void;
  offset?: number;
  activePatch: string | null;
  onActivePatch: (to: string) => void;
};
