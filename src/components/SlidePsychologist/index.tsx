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
      <div className="w-full tablet:w-[336px] desktop:w-[384px]">
        <div className="relative w-full h-[350px] tablet:w-[336px] tablet:h-[350px] desktop:w-[384px] desktop:h-[400px]">
          <Image
            className="absolute top-0 left-0 object-cover object-top w-full h-full"
            src={psychologistPhoto.url}
            alt={name}
            fill={true}
          />
        </div>

        <div className="h-[180px] flex flex-col py-7 px-5 tablet:px-7 desktop:px-7 bg-white">
          <p className="text-lg font-semibold text-black-charcoal">{name}</p>
          <p className="mt-5 text-base font-normal text-black-charcoal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlidePsychologist;