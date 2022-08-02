import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { ApplicationProvider } from '~/hooks/Application';

import { theme } from '~/styles/theme';
import { Fonts } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
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
