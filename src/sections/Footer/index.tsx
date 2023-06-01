import { FC } from 'react';
import Logo from 'public/svg/logo.svg';
import SocialLinks from '@/components/SocialLinks';

const Footer: FC = () => {
  return (
    <footer className="pt-10 pb-5 tablet:py-[60px]">
      <div className="relative container text-center tablet:text-left flex flex-col justify-between items-center tablet:flex-wrap tablet:flex-row tablet:items-end">
        <div className="tablet:absolute tablet:top-0 tablet:left-8">
          <Logo />
        </div>
        <div className="mt-10 tablet:mt-0 tablet:order-1">
          <h3 className="text-lg text-accent font-bold leading-7 mb-7">
            Контакти
          </h3>
          <address>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="tel:0000000000">0000000000 </a>
              </li>
              <li>
                <a
                  href="mailto:chepurko.larysa@gmail.com"
                  className="underline"
                >
                  chepurko.larysa@gmail.com
                </a>
              </li>
              <li>
                <a href="">04214, Київ, вул.Героїв Дніпра, 53 оф.3</a>
              </li>
            </ul>
          </address>
        </div>
        <div className="mt-10">
          <h3 className="text-lg text-accent font-bold leading-7 mb-7">
            Соцмережі
          </h3>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
