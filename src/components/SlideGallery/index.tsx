import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { TypeBanner } from '@/types';

const SlideGallery: FC<TypeBanner> = ({ photo }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[320px] h-[234px] tablet:w-[336px] tablet:h-[245px] desktop:w-[384px] desktop:h-[280px]">
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={`/images/gallery/${photo.url}.jpg`}
          alt={t(`${photo.alt}`)}
          fill={true}
        />
      </div>
    </div>
  );
};

export default SlideGallery;
