import { useRouter } from 'next/router';
import React from 'react';
import OgImage from '../../components/OgImage';

const Images = () => {
  const router = useRouter();
  return (
    <OgImage
      title={router.query.title as string}
      top={router.query.top as string}
    />
  );
};

export default Images;
