import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #c4c4c4;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 192rem;
  min-height: 10rem;
  margin-bottom: 5rem;
  padding: 10rem 10rem 0;

  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1279px) {
    margin-bottom: 1rem;
    padding: 2rem 9.2rem 0;

    align-items: center;
    flex-direction: column;
  }
`;

export const ContentContact = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 29.6rem;

  flex-direction: column;
  justify-content: flex-start;

  > p {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.4rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }

  @media (max-width: 1279px) {
    margin-bottom: 1rem;

    align-items: center;
  }
`;

export const ContentLogo = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 41.2rem;
  min-height: 19.3rem;

  align-items: center;
  justify-content: center;

  border: 2px solid #000000;

  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  font-family: ${theme.fonts.roboto};

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const ContentLogoMobile = styled(ContentLogo)`
  margin-bottom: 2rem;

  display: none;

  @media (max-width: 1279px) {
    display: flex;
  }

  @media (max-width: 767px) {
    max-width: 19rem;
    min-height: 9rem;
  }
`;

export const ContentSocialLinks = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 29.6rem;
  padding: 2rem 3.5rem;

  border: 2px solid #000000;

  @media (max-width: 767px) {
    padding: 0.5rem 3.2rem;
  }
`;

export const ContentNavigation = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 10rem;
  margin-bottom: 6.2rem;

  background-color: #000000;

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const ContentCopyright = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 4.5rem;

  background-color: #000000;
`;
