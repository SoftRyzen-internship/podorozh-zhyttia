import { FC } from "react";

import { SubmitButtonProps } from "./types";

const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="block w-full py-4 text-base font-medium leading-normal text-white rounded bg-accent hover:bg-accent-dark focus:bg-accent-dark focus:outline-none transition-colors"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
