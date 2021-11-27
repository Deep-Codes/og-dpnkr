import { useRouter } from 'next/router';
import React from 'react';
import BrianOgImage from '../components/BrianOgImage';

const Images = () => {
  const router = useRouter();
  return (
    <BrianOgImage
      title={router.query.title as string}
      slug={router.query.slug as string}
    />
  );
};

export default Images;
