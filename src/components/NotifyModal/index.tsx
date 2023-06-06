import { FC, Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';

import { IModalProps } from './types';

import Close from 'public/svg/close.svg';

const NotifyModal: FC<IModalProps> = ({ setIsModalOpen }) => {
  let [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setIsModalOpen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen, setIsModalOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setIsModalOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex justify-center items-center w-full max-w-md h-[176px] p-6 transform overflow-hidden rounded bg-modal shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="max-w-[240px] text-lg font-semibold leading-7 text-yellow"
                >
                  {t('modal.modal-text')}
                </Dialog.Title>
                <div className="absolute top-5 right-5 flex justify-center items-center w-6 h-6 rounded-full hover:border focus:border focus:outline-none border-white cursor-pointer transition">
                  <Close
                    aria-label={t('modal.aria-close')}
                    onClick={closeModal}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NotifyModal;
