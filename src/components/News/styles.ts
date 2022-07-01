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
  padding: 2rem 0 10rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 100%;
    padding: 2rem 5rem 10rem;
  }

  @media (max-width: 767px) {
    padding: 3rem 2rem 5rem;
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 7rem;

  margin-bottom: 2rem;

  align-items: center;
  justify-content: center;

  > h2 {
    min-width: max-content;

    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.anton};

    @media (max-width: 479px) {
      font-size: 3.4rem;
      line-height: 3.9rem;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 479px) {
    min-height: 4.4rem;
  }
`;

export const ContentSearchInput = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-left: auto;

  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
  }
`;

export const ContentTopNews = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-bottom: 5rem;

  gap: 2rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1279px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }

  @media (max-width: 479px) {
    gap: 1rem;
  }
`;

export const ContentImage = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 61rem;
  max-height: 40rem;

  > img {
    width: 100%;
    height: auto;
    min-height: 40rem;

    object-fit: cover;

    @media (max-width: 479px) {
      min-height: 22rem;
    }
  }

  @media (max-width: 1279px) {
    width: 59.08%;
  }

  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ContentDescription = styled(C.Flex)`
  width: 40%;
  max-width: 39.1rem;
  padding: 0.5rem 0 0;

  flex-direction: column;

  > span {
    margin-bottom: 1rem;

    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.5rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto};
    color: ${theme.colors.text.description};

    @media (max-width: 479px) {
      margin-bottom: 0.5rem;

      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  > h2 {
    margin-bottom: 2rem;

    font-weight: 700;
    font-size: 3.5rem;
    line-height: 3.6rem;
    white-space: normal;
    color: ${theme.colors.text.title};
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      margin-bottom: 1rem;

      font-size: 2.6rem;
      line-height: 2.6rem;
    }
  }

  > p {
    font-weight: 400;
    font-size: 1.9rem;
    white-space: normal;
    line-height: 2.4rem;
    font-family: ${theme.fonts.roboto_condensed};

    @media (max-width: 479px) {
      font-size: 1.7rem;
      line-height: 2.3rem;
    }
  }

  @media (max-width: 991px) {
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
`;

export const ContentMoreNews = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1279px) {
    gap: 1.95rem;
  }

  @media (max-width: 527px) {
    flex-direction: column;
  }
`;
