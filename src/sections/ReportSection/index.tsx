import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Heading from '@/components/Heading';
import LinkButton from '@/components/LinkButton';

import styles from './reportSection.module.css';

const ReportSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="#reports"
      className={`onlyMobile:bg-circle onlyMobile:bg-repeat tablet:bg-docs tablet:bg-[position:left_bottom,right_top,left_top] tablet:bg-[size:243px,226px,72px] desktop:bg-[size:370px,390px,72px] ${styles.bgRepeating}`}
    >
      <div className="container flex flex-col items-center py-10 text-center tablet:text-2xl desktop:text-4xl tablet:py-20 desktop:py-[100px]">
        <Heading weight="bold">{t('report.title')}</Heading>
        <p className="mt-8 text-sm w-[284px] tablet:text-lg tablet:w-[450px] tablet:mt-10 desktop:mt-12">
          {t('report.description')}
        </p>
        <div className="mt-8 w-fit tablet:mt-10 desktop:mt-12">
          <LinkButton href="#">{t('btn.report')}</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
