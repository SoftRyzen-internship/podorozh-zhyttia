import { Dispatch, SetStateAction } from 'react';

export interface IModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
