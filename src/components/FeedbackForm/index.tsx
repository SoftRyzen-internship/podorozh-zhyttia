import { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import FeedbackFormInput from '@/components/FeedbackInput';
import FeedbackFormTextarea from '@/components/FeedbackTextarea';
import SubmitButton from '@/components/SubmitButton';
import Loader from '@/components/Loader';
import NotifyModal from '@/components/NotifyModal';

import { TypeFormValues } from './types';

const FeedbackForm: FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      const message = `Name: ${data.name.trim()}\nPhone: ${
        data.phone
      }\nCommentary: ${data.commentary.trim()}`;
      const response = await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `chat_id=${
            process.env.NEXT_PUBLIC_GROUP_ID
          }&text=${encodeURIComponent(message)}`,
        }
      );

      const responseData = await response.json();

      if (responseData.ok) {
        setIsModalOpen(true);
      } else {
        throw Error();
      }

      reset();
    } catch (error) {
      toast.error(() => t('form.error.message'));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className="w-full mt-10 tablet:w-[335px] tablet:mt-0 desktop:w-[487px] desktop:mt-0 flex flex-col max-w-full w-120 gap-7"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FeedbackFormInput
        label={t('form.aria.name')}
        id="inline-name"
        placeholder={t('form.name')}
        register={register('name', {
          required: `${t('form.error.name_required')}`,
          maxLength: {
            value: 70,
            message: `${t('form.error.name_max')}`,
          },
          validate: {
            noSymbol: (value: string) => {
              if (/^[\p{L}\s'-]+$/u.test(value)) {
                return undefined;
              }
              return `${t('form.error.name_format')}`;
            },
            OnlySpaces: (value: string) => {
              if (!/^\s+$/.test(value)) {
                return undefined;
              }
              return `${t('form.error.name_space')}`;
            },
            minLengthOnlyLetters: (value: string) => {
              const trimmedValue = value.replace(/[\s-]+/g, '');
              if (trimmedValue.length >= 2) {
                return undefined;
              }
              return `${t('form.error.name_min')}`;
            },
          },
        })}
        error={errors?.name?.message}
      />
      <FeedbackFormInput
        label={t('form.aria.phone')}
        id="inline-phone"
        placeholder={t('form.phone')}
        register={register('phone', {
          required: `${t('form.error.phone_required')}`,
          pattern: {
            value: /^\+380\d{9}$/,
            message: t('form.error.phone_format'),
          },
        })}
        error={errors?.phone?.message}
      />
      <FeedbackFormTextarea
        label={t('form.aria.message')}
        id="inline-commentary"
        placeholder={t('form.comment')}
        register={register('commentary', {
          maxLength: {
            value: 500,
            message: `${t('form.error.textarea')}`,
          },
        })}
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
      <Toaster position="top-right" reverseOrder={false} />
      {isModalOpen && <NotifyModal setIsModalOpen={setIsModalOpen} />}
    </form>
  );
};

export default FeedbackForm;
