import { NextPage } from 'next';
import Image from 'next/image';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import userArray from './api';
import { SliderType } from './types';

import PrevArrow from 'public/svg/arrowPrev.svg';
import NextArrow from 'public/svg/arrowNext.svg';

SwiperCore.use([Navigation]);

const Slider: NextPage = () => {
  return (
    <div>
      <h2 className="text-center tablet:hidden desktop:hidden">
        Психологічна допомога
      </h2>
      <div className="flex flex-col-reverse items-center tablet:flex-col">
        <div className="w-full flex-col items-center tablet:flex tablet:flex-row tablet:justify-between desktop:flex desktop:flex-row  desktop:justify-between desktop:px-2">
          <h2 className="hidden tablet:block desktop:block">
            Психологічна допомога
          </h2>
          <div className="flex items-center justify-center mt-8 tablet:mt-0">
            <button
              type="button"
              aria-label="prev"
              className="custom-swiper-button-prev mr-[23px] enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light"
            >
              <PrevArrow fill="currentColor" />
            </button>
            <button
              type="button"
              aria-label="next"
              className="custom-swiper-button-next enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light"
            >
              <NextArrow fill="currentColor" />
            </button>
          </div>
        </div>
        <Swiper
          className="w-full max-w-[1200px] z-0 mt-8 tablet:mt-10 desktop:mt-12"
          spaceBetween={32}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {userArray.map(({ id, to, name, description }: SliderType) => (
            <SwiperSlide key={id}>
              <div className="flex flex-col items-center">
                <div className="w-[320px] tablet:w-[336px] desktop:w-[384px]">
                  <div className="relative w-[320px] h-[350px] tablet:w-[336px] tablet:h-[350px] desktop:w-[384px] desktop:h-[400px]">
                    <Image
                      className="w-full h-full object-contain absolute top-0 left-0"
                      src={`/images/slider/${to}.jpg`}
                      alt={name}
                      fill={true}
                    />
                  </div>
                  <div className="flex flex-col items-center py-7 px-5 tablet:px-7 desktop:px-7">
                    <p className="font-semibold text-lg text-black-charcoal">
                      {name}
                    </p>
                    <p className="mt-5 font-normal text-base text-black-charcoal">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
