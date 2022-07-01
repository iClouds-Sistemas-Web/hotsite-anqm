import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-height: 55rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #2b2b2b;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 192rem;
  margin-bottom: 5rem;
  padding: 13.4rem 10rem 0;

  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1279px) {
    margin-bottom: 1rem;
    padding: 2rem 9.2rem 0;

    align-items: center;
  }

  @media (max-width: 1000px) {
    padding: 3rem 0 0;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 479px) {
    margin-bottom: 0;
    padding: 3rem 0 0;
  }
`;

export const ContentContact = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 29.6rem;

  margin: auto 0;
  flex-direction: column;
  justify-content: flex-start;

  > p {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.4rem;
    color: ${theme.colors.text.footer};
    font-family: ${theme.fonts.roboto};
  }

  @media (max-width: 1279px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 767px) {
    height: 5.1rem;
    margin: 2rem;

    > p {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
`;

export const ContentLogo = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 37.7rem;
  min-height: 19.9rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 27rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContentLogoMobile = styled(ContentLogo)`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    margin-bottom: 0;

    max-width: 15.4rem;
    min-height: 8.1rem;
  }
`;

export const ContentSocialLinks = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 29.6rem;

  margin: auto 0;
  flex-direction: column;
  justify-content: center;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  p {
    margin: 1rem;

    font-size: 2rem;
    font-weight: 300;
    line-height: 1.8rem;
    color: ${theme.colors.text.footer};
    font-family: ${theme.fonts.roboto};
  }

  @media (max-width: 1279px) {
    padding: 0;
    margin: auto 0;

    align-items: center;
  }

  @media (max-width: 991px) {
    max-width: 19.6rem;
  }

  @media (max-width: 767px) {
    /* margin-bottom: 4.4rem; */
    flex-direction: row;

    p {
      margin: auto 0.5rem;

      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }

  @media (max-width: 479px) {
    margin-bottom: 4.4rem;
  }
`;

export const ContentFacebook = styled(C.Flex)`
  padding-right: 1.1rem;

  justify-content: flex-end;

  @media (max-width: 479px) {
    padding-right: 0;
    margin-right: 4.8rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const ContentInstagram = styled(C.Flex)`
  justify-content: flex-end;

  @media (max-width: 479px) {
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const ContentNavigation = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 2.8rem;
  margin-bottom: 10rem;

  align-items: center;
  justify-content: center;

  ul {
    gap: 4rem;
    display: flex;
  }

  li {
    list-style-type: none;
  }

  font-size: 1.2rem;
  line-height: 2.8rem;
  color: ${theme.colors.text.footer};
  font-family: ${theme.fonts.roboto};

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const ContentCopyright = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 4rem;

  align-items: center;
  justify-content: center;

  background-color: #222222;

  > p {
    margin: 0 auto;

    color: #777777;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.8rem;
    font-family: ${theme.fonts.roboto};
  }

  > img {
    right: 10rem;
    position: relative;

    width: 4rem;
    height: 2.5rem;
  }

  @media (max-width: 767px) {
    > img {
      right: 2rem;
    }
  }

  @media (max-width: 479px) {
    min-height: 3rem;

    > img {
      right: 2rem;

      width: 2.52rem;
      height: 1.6rem;
    }

    > p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
