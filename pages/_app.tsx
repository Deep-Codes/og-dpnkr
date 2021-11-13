import { NextPage } from 'next';
import { AppProps } from 'next/app';
import 'inter-ui/inter.css';
import '../styles/theme.css';

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default Application;
