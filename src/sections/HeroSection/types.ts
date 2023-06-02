type BannerType = {
  id: string;
  title: string;
  photo: {
    url: string;
    alt: string;
  };
};

export interface IHeroProps {
  allBanners: BannerType[];
}
