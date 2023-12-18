import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

import { ChakraProvider } from '@chakra-ui/react';
import { ApplicationProvider } from '~/hooks/Application';

import { theme } from '~/styles/theme';
import { Fonts } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W6882XB' });
  }, []);

  return (
    <ApplicationProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApplicationProvider>
  );
}

export default MyApp;
