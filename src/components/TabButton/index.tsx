import { FC } from 'react';
import { Tab } from '@headlessui/react';

import { ITabButtonProps } from './types';

const TabButton: FC<ITabButtonProps> = ({ children }) => {
  return (
    <Tab as="li" className="focus:outline-none">
      {({ selected }) => (
        <button
          className={`${
            selected
              ? 'bg-accent text-white'
              : ' bg-white text-accent border border-accent hover:text-accent-dark focus:text-accent-dark hover:border-accent-dark focus:border-accent-dark'
          } w-full tablet:w-[336px] desktop:w-[280px] h-[48px] text-sm tablet:text-lg font-semibold leading-7 rounded focus:outline-none`}
        >
          {children}
        </button>
      )}
    </Tab>
  );
};

export default TabButton;
