import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Heading from '@/components/Heading';
import MyTabs from '@/components/Tabs';

const DonateSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="donate" className="py-10 tablet:py-20 desktop:py-[100px]">
      <div className="container">
        <Heading>{t('donate.title')}</Heading>
        <MyTabs />
      </div>
    </section>
  );
};

export default DonateSection;
