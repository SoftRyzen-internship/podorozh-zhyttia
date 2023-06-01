import { FC } from 'react';

import { IInputFieldProps } from '@/components/FeedbackInput/interfaces';

const FeedbackFormTextarea: FC<IInputFieldProps> = ({
  label,
  id,
  placeholder,
  error,
  register,
  rows,
}) => {
  return (
    <>
      <label
        className="w-full h-[180px] desktop:h-[140px] relative"
        htmlFor={id}
      >
        <textarea
          className={`h-full resize-none bg-yellow placeholder-black-charcoal border rounded-sm w-full py-3 px-2.5 tablet:px-3 text-black-charcoal text-base leading-6 ${
            !error ? 'border-accent' : 'border-red'
          }`}
          id={id}
          placeholder={placeholder}
          aria-label={label}
          {...register}
          rows={rows}
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

export default FeedbackFormTextarea;
