import { useRouter } from 'next/router';
import React from 'react';
import AmieImage from '../../components/AmieImage';

const Images = () => {
  const router = useRouter();
  return (
    <AmieImage
      title={router.query.title as string}
      top={router.query.top as string}
    />
  );
};

export default Images;
