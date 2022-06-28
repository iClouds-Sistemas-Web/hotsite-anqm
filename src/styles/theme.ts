import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
      },
    },
  },
});

export const personTheme = {
  colors: {
    primary: '#FDC973',
    secondary: '#512940',

    white: '#ffffff',
    black: '#000000',

    background: '#EEF2F5',
    tranparent: 'transparent',

    text: {
      title: '#1A1A1A',
      subtitle: '#1A1A1A',
      description: '#1A1A1A',
    },
  },

  fonts: {
    roboto: 'Roboto',
    roboto_condensed: 'Roboto Condensed',
  },
};
