import { FC } from 'react';

import { SubmitButtonProps } from './types';

const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  isDisabled = false,
}) => {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="flex items-center justify-center w-full py-4 text-base font-medium leading-normal text-white transition-colors rounded bg-accent hover:bg-accent-dark focus:bg-accent-dark focus:outline-none disabled:bg-accent-dark"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
