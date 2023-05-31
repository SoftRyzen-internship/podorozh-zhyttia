import { FC } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { request } from '@/api/datocms';
import { DATO_CMS_QUERY } from '@/constants';
import { TypeBanner, TypePsychologist } from '@/types';

import HeroSection from '@/sections/HeroSection';
import MentalSupportSection from '@/sections/MentalSupportSection';
import DonateSection from '@/sections/DonateSection';
import FundSupportSection from '@/sections/FundSupportSection';
import FeedbackSection from '@/sections/FeedbackSection';
import BookSection from '@/sections/BookSection';
import ReportSection from '@/sections/ReportSection';
import GallerySection from '@/sections/GallerySection';

type TypeHomeProps = {
  data: {
    allPsychologists: TypePsychologist[];
    allBanners: TypeBanner[];
  };
};

const Home: FC<TypeHomeProps> = ({ data }) => {
  const { allPsychologists, allBanners } = data;
  const { t } = useTranslation('common');

  return (
    <>
      <HeroSection />
      <MentalSupportSection allPsychologists={allPsychologists} />
      <DonateSection />
      <FundSupportSection />
      <FeedbackSection />
      <BookSection />
      <ReportSection />
      <GallerySection />
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  const data = await request({
    query: DATO_CMS_QUERY,
    variables: { _locale: locale, _first: 20, _skip: 0 },
  });

  const localization = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...localization,
      data,
    },
  };
}
