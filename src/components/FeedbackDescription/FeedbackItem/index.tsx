import { FC } from 'react';

import { TypeDescriptionItem } from '@/components/FeedbackDescription/FeedbackItem/types';

const FeedbackItem: FC<TypeDescriptionItem> = ({ text, number }) => {
  return (
    <li className="flex gap-6">
      <p className="text-accent text-2xl text-center self-start leading-tight font-bold px-2">
        {number}
      </p>
      <p>{text}</p>
    </li>
  );
};

export default FeedbackItem;
