type TypePhoto = {
  alt: string;
  url: string;
  width?: number;
  height?: number;
};

export type TypePsychologist = {
  id: string;
  name: string;
  description: string;
  psychologistPhoto: TypePhoto;
};

export type TypeBanner = {
  id: string;
  title: string;
  photo: TypePhoto;
};
