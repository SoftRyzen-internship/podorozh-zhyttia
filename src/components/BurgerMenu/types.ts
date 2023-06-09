export type TypeBurgerMenuProps = {
  handleCloseModal: () => void;
  offset?: number;
  activePath: string | null;
  onActivePath: (to: string) => void;
};
