import { FC } from 'react';
import Image from 'next/image';

import { TypePsychologist } from '@/types';

const SlidePsychologist: FC<TypePsychologist> = ({
  name,
  description,
  psychologistPhoto,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-[350px] tablet:w-[336px] tablet:h-[350px] desktop:w-[384px] desktop:h-[400px]">
        <Image
          src={psychologistPhoto.url}
          alt={name}
          width={psychologistPhoto.width}
          height={psychologistPhoto.height}
          className="object-cover object-top h-full w-full"
        />
      </div>
      <div className="small:h-[180px] flex flex-col py-7 px-5 tablet:px-7 desktop:px-7 bg-white">
        <p className="text-lg font-semibold text-black-charcoal">{name}</p>
        <p className="mt-5 text-base font-normal text-black-charcoal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SlidePsychologist;
