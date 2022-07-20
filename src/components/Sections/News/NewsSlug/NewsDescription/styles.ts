import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: center;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 103rem;
  padding-bottom: 8.4rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    padding: 0 2rem 5rem;
  }

  @media (max-width: 767px) {
    padding-bottom: 3rem;
  }
`;

export const ContentNewsHeader = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-bottom: 5rem;

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  border-bottom: 1px solid #d3d3d3;

  > h1 {
    margin-bottom: 0.5rem;

    font-weight: 600;
    font-size: 3.5rem;
    line-height: 4rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      font-size: 2.4rem;
      line-height: 2.9rem;
    }
  }

  > span {
    margin-bottom: 0.5rem;

    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.5rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  > h2 {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.4rem;
    color: ${theme.colors.text.description};
    font-family: ${theme.fonts.roboto_condensed};

    @media (max-width: 767px) {
      border: none;
      font-size: 1.7rem;
      line-height: 2.2rem;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 2rem;

    border-bottom: none;
  }
`;

export const ContentImage = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 81.9rem;
  margin-bottom: 5rem;

  > img {
    width: 100%;
    height: auto;
    max-width: 81.9rem;

    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 479px) {
      width: 100%;
      height: 22rem;
    }
  }

  @media (max-width: 479px) {
    margin-bottom: 2rem;
  }
`;

export const ContentDescription = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 92.5rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    height: 50rem;
    max-width: 81.9rem;
  }

  p {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 3.4rem;
    text-align: justify;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      font-size: 1.7rem;
      line-height: 3rem;
    }
  }
`;
