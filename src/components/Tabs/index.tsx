import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { useTranslation } from 'next-i18next';

import TabButton from '../TabButton';
import PrivatTab from './PrivatTab';
import MonoTab from './MonoTab';
import SwiftTab from './SwiftTab';
import PayPalTab from './PayPalTab';

const Tabs: FC = () => {
  const { t } = useTranslation();

  return (
    <Tab.Group>
      <Tab.List
        as="ul"
        className="grid grid-cols-2 desktop:grid-cols-4 gap-5 tablet:gap-8 mt-8 tablet:mt-10 desktop:mt-[60px] mb-10 tablet:mb-[60px]"
      >
        <TabButton>{t('donate.private24')}</TabButton>
        <TabButton>Mono</TabButton>
        <TabButton>SWIFT</TabButton>
        <TabButton>PayPal</TabButton>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={'focus:outline-accent'}>
          <PrivatTab />
        </Tab.Panel>
        <Tab.Panel className={'focus:outline-accent'}>
          <MonoTab />
        </Tab.Panel>
        <Tab.Panel className={'focus:outline-accent'}>
          <SwiftTab />
        </Tab.Panel>
        <Tab.Panel className={'focus:outline-accent'}>
          <PayPalTab />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
