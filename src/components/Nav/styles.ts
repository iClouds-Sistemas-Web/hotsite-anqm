import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: center;

  background-color: #c4c4c4;
`;

export const ContentToggle = styled(C.Flex)`
  top: 0;
  left: 0;
  position: absolute;

  width: 100%;
  height: auto;
  max-width: 7rem;
  min-height: 8rem;

  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 1279px) {
    display: flex;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 0 10rem;
  max-width: 192rem;
  min-height: 10rem;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1279px) {
    min-height: 8rem;
    padding: 0 7rem;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const ContentLogo = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 19rem;
  min-height: 9rem;
  margin-right: 2rem;

  align-items: center;
  justify-content: center;

  border: 2px solid #000000;

  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  font-family: ${theme.fonts.roboto};

  @media (max-width: 1279px) {
    min-height: 6rem;
  }

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const ContentNavigation = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 71.5rem;
  margin: 0 2rem 0 auto;

  min-height: 9rem;

  background-color: #000000;

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const ContentSocialLinks = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 19rem;

  min-height: 9rem;

  border: 2px solid #000000;

  @media (max-width: 1279px) {
    min-height: 6rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
