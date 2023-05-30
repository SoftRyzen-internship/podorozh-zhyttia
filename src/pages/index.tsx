import { FC } from "react";

import { request } from "@/api/datocms";
import { DATO_CMS_QUERY } from "@/constants";
import { TypeBanner, TypePsychologicalAssistant } from "@/types";

type TypeHomeProps = {
  data: {
    allPsychologicalAssistants: TypePsychologicalAssistant[];
    allBanners: TypeBanner[];
  };
};

const Home: FC<TypeHomeProps> = ({ data }) => {
  const { allPsychologicalAssistants: Assistants, allBanners } = data;

  return (
    <div className="container">
      <h1 className="text-accent">Hello world!!!</h1>
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  const data = await request({
    query: DATO_CMS_QUERY,
    variables: { _locale: locale, _first: 20, _skip: 0 },
  });

  return {
    props: { data },
  };
}
