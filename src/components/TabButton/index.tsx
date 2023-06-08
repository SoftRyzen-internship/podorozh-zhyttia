import { FC } from 'react';
import { Tab } from '@headlessui/react';

import { ITabButtonProps } from './types';

const TabButton: FC<ITabButtonProps> = ({ children }) => {
  return (
    <Tab as="li" className="focus:outline-none">
      {({ selected }) => (
        <button
          type="button"
          className={`${
            selected
              ? 'bg-accent text-white hover:bg-accent-dark focus:bg-accent-dark'
              : ' bg-white text-accent border border-accent hover:text-white focus:text-white hover:bg-accent focus:bg-accent'
          } w-full tablet:w-[336px] desktop:w-[280px] h-[48px] text-sm tablet:text-lg font-semibold leading-7 rounded focus:outline-accent focus:outline-offset-4 transition-colors`}
        >
          {children}
        </button>
      )}
    </Tab>
  );
};

export default TabButton;
