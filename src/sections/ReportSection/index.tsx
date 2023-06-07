import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Heading from '@/components/Heading';
import LinkButton from '@/components/LinkButton';

const ReportSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#reports" className="bg-circle bg-repeat bg-[size:72px]">
      <div className="container flex flex-col items-center py-10 text-center tablet:text-2xl desktop:text-4xl tablet:py-20 desktop:py-[100px] tablet:bg-docs tablet:bg-[position:-40px_210px,490px_-100px] tablet:bg-[size:290px,290px] desktop:bg-[position:-65px_210px,910px_-120px] desktop:bg-[size:370px,390px] bg-no-repeat">
        <Heading className="font-bold">{t('report.title')}</Heading>
        <p className="mt-8 text-sm w-[284px] tablet:text-lg tablet:w-[450px] tablet:mt-10 desktop:mt-12">
          {t('report.description')}
        </p>
        <LinkButton
          href="https://drive.google.com/drive/folders/1WFyEqXJ3_nfoDIB85u74G0f4pQW7WAEh"
          className="mt-8 w-fit tablet:mt-10 desktop:mt-12"
        >
          {t('btn.report')}
        </LinkButton>
      </div>
    </section>
  );
};

export default ReportSection;
