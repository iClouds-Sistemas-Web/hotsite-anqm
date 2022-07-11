import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #ffffff;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 124rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 100%;
    padding: 2rem 5rem 10rem;
  }

  @media (max-width: 767px) {
    padding: 1rem 2rem 5rem;
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 8rem;

  margin-bottom: 1rem;

  align-items: center;
  justify-content: center;

  > h2 {
    margin-right: 2rem;
    min-width: max-content;

    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.anton};

    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 479px) {
      width: 100%;

      text-align: center;

      font-size: 4rem;
      line-height: 4.9rem;
      border-bottom: 1px solid #dddddd;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 479px) {
    min-height: 6rem;
  }
`;

export const ContentSearchInput = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-left: auto;
  max-width: 63.1rem;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const ContentPhrase = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-bottom: 5rem;

  p {
    color: #2a2a2a;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }

  @media (max-width: 479px) {
    margin: 0;
  }
`;
