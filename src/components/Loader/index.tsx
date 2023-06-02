import React, { FC } from 'react';

import { TypeLoaderProps } from './type';

const Loader: FC<TypeLoaderProps> = ({ className }) => {
  return (
    <div
      className={`inline-block h-6 w-6 animate-spin rounded-full border-4 border-accent border-current border-r-crystal align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
    </div>
  );
};

export default Loader;
