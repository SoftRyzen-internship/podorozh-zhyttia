import { FC } from 'react';

import { IInputFieldProps } from '@/components/FeedbackInput/interfaces';

const FeedbackFormInput: FC<IInputFieldProps> = ({
  label,
  id,
  placeholder,
  error,
  register,
}) => {
  return (
    <>
      <label className="w-full relative" htmlFor={id}>
        <input
          className={`border ${
            !error ? 'border-accent' : 'border-red'
          } rounded-sm w-full py-3 px-2.5 tablet:px-3 text-black-charcoal text-base placeholder:text-black-charcoal placeholder:text-base bg-yellow h-12`}
          id={id}
          type="text"
          placeholder={placeholder}
          aria-label={label}
          {...register}
        />
        {error && (
          <p className="absolute text-tiny text-red font-roboto leading-4 -bottom-5">
            {error}
          </p>
        )}
      </label>
    </>
  );
};

export default FeedbackFormInput;
