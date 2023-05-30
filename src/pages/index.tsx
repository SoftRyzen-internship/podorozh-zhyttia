import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container">
      <h1 className="text-accent">{t('h1')}</h1>
      <p>{t('title')}</p>
    </div>
  );
};

export default Home;
