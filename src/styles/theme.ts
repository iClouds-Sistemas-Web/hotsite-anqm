import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
        scrollBehavior: 'smooth',
      },
    },
  },
});

export const personTheme = {
  colors: {
    primary: '#0E4F25 ',
    secondary: 'rgba(242, 183, 5, 0.1)',

    white: '#ffffff',
    black: '#000000',

    tranparent: 'transparent',

    text: {
      title: '#1A1A1A',
      footer: '#858585',
      description: '#333333',
    },
  },

  fonts: {
    anton: 'Anton, arial, sans-serif',
    roboto: 'Roboto, arial, sans-serif',
    roboto_condensed: 'Roboto Condensed, arial, sans-serif',
  },
};
