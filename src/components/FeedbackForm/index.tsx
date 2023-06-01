import { FC } from 'react';

import { useTranslation } from 'next-i18next';

import { useForm, SubmitHandler } from 'react-hook-form';

import FeedbackFormInput from '@/components/FeedbackInput';
import FeedbackFormTextarea from '@/components/FeedbackTextarea';
import SubmitButton from '@/components/SubmitButton';

import { TypeFormValues } from './types';

const FeedbackForm: FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeFormValues>();

  const onSubmit: SubmitHandler<TypeFormValues> = async data => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="w-full tablet:w-[335px] desktop:w-[487px] flex flex-col max-w-full w-120 gap-7"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FeedbackFormInput
        label="Name"
        id="inline-name"
        placeholder={t('form.name')}
        register={register('name', {
          required: `${t('form.error.name')}`,
          minLength: {
            value: 3,
            message: `${t('form.error.name')}`,
          },
        })}
        error={errors?.name?.message}
      />
      <FeedbackFormInput
        label="Phone"
        id="inline-phone"
        placeholder={t('form.phone')}
        register={register('phone', {
          required: `${t('form.error.phone')}`,
          pattern: {
            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            message: t('form.error.phone'),
          },
        })}
        error={errors?.phone?.message}
      />
      <FeedbackFormTextarea
        label="Commentary"
        id="inline-commentary"
        placeholder={t('form.comment')}
        register={register(
          'commentary'
          //Запитати - чи е обов'язкове це поле?
          // {
          //   required: "*Це поле є обов'язковим",
          //   minLength: {
          //     value: 5,
          //     message: 'Мінімальна довжина 5 символів',
          //   },
          // }
        )}
        error={errors?.commentary?.message}
        rows={6}
      />
      <SubmitButton>{t('btn.submit')}</SubmitButton>
    </form>
  );
};

export default FeedbackForm;
