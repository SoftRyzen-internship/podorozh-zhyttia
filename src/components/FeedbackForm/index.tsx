import { FC, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { useForm, SubmitHandler } from 'react-hook-form';

import FeedbackFormInput from '@/components/FeedbackInput';
import FeedbackFormTextarea from '@/components/FeedbackTextarea';
import SubmitButton from '@/components/SubmitButton';
import Loader from '@/components/Loader';

import { botToken, groupId } from '@/components/TelegramBot';

import { TypeFormValues } from './types';

const FeedbackForm: FC = () => {
  const [isSending, setIsSending] = useState(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeFormValues>();

  const onSubmit: SubmitHandler<TypeFormValues> = async data => {
    if (isSending) {
      return;
    }

    try {
      setIsSending(true);
      const message = `Name: ${data.name}\nPhone: ${data.phone}\nCommentary: ${data.commentary}`;
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `chat_id=${groupId}&text=${encodeURIComponent(message)}`,
        }
      );

      const responseData = await response.json();

      console.log('Повідомлення успішно відправлено');
      console.log(responseData);

      reset();
    } catch (error) {
      console.error('Помилка під час відправки повідомлення', error);
    } finally {
      setIsSending(false);
    }
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
        register={register('commentary')}
        error={errors?.commentary?.message}
        rows={6}
      />
      <SubmitButton isDisabled={isSending}>
        {isSending ? (
          <>
            <Loader className="mr-2" />
            {t('btn.sending')}
          </>
        ) : (
          t('btn.submit')
        )}
      </SubmitButton>
    </form>
  );
};

export default FeedbackForm;
