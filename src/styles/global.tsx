import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-weight: 400;
        font-family: "Anton";
        src: url("/fonts/Anton-Regular.ttf");
      }
    `}
  />
);
