import { FC, useState } from 'react';
import { Tab } from '@headlessui/react';

import PryvatTab from './PryvatTab';
import MonoTab from './MonoTab';
import PayPalTab from './PayPalTab';

const MyTabs: FC = () => {
  const [payments] = useState(['Приват24', 'Mono', 'SWIFT', 'PayPal']);

  return (
    <Tab.Group>
      <Tab.List
        as="ul"
        className="grid grid-cols-2 desktop:grid-cols-4 gap-5 tablet:gap-8 mb-10 tablet:mb-[60px]"
      >
        {payments.map(payment => (
          <Tab as="li" className="focus:outline-none">
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? 'bg-accent text-white'
                    : ' bg-white text-accent border border-accent hover:text-accent-dark focus:text-accent-dark hover:border-accent-dark focus:border-accent-dark'
                } w-full tablet:w-[336px] desktop:w-[280px] h-[48px] text-sm tablet:text-lg font-semibold leading-7 rounded focus:outline-none`}
              >
                {payment}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <PryvatTab />
        </Tab.Panel>
        <Tab.Panel>
          <MonoTab />
        </Tab.Panel>
        <Tab.Panel>Контент 3</Tab.Panel>
        <Tab.Panel>
          <PayPalTab />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default MyTabs;
