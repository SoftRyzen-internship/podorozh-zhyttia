import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInputFieldProps {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
  rows?: number | undefined;
}
