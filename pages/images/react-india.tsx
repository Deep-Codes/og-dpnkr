import { useRouter } from 'next/router';
import React from 'react';
import ReactIndia from '../../components/ReactIndia';

export interface ReactIndiaImageProps {
  talkTitle: string;
  speaker: string;
  jobTitle: string;
  image: string;
}

const Images = () => {
  const router = useRouter();
  return (
    <ReactIndia
      talkTitle={router.query.talkTitle as string}
      speaker={router.query.speaker as string}
      jobTitle={router.query.jobTitle as string}
      image={router.query.image as string}
    />
  );
};

export default Images;
