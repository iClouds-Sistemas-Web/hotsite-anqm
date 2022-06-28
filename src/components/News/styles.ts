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
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    @media (max-width: 479px) {
      font-size: 3.4rem;
      line-height: 3.9rem;
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

export const ContentTopNews = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-bottom: 5rem;

  gap: 1rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1279px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ContentImage = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: auto;
  max-width: 61rem;
  max-height: 40rem;
  padding-bottom: 32.259%;

  background-color: #dddddd;

  > img {
    position: absolute;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (max-width: 1279px) {
    width: 59.08%;
    padding-bottom: 43.291%;
  }

  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    padding-bottom: 73.4%;
  }

  @media (max-width: 479px) {
    padding-bottom: 65.672%;
  }
`;

export const ContentDescription = styled(C.Flex)`
  width: 40%;
  max-width: 40.1rem;
  padding: 0.5rem 0 0 1rem;

  flex-direction: column;

  > span {
    margin-bottom: 1rem;

    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.5rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      margin-bottom: 0.5rem;

      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  > h2 {
    margin-bottom: 1.5rem;

    font-weight: 600;
    font-size: 3.5rem;
    line-height: 4rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      margin-bottom: 1rem;

      font-size: 2.6rem;
      line-height: 2.8rem;
    }
  }

  > p {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.4rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto_condensed};

    @media (max-width: 479px) {
      font-size: 1.7rem;
      line-height: 2rem;
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
    gap: 2rem;
    flex-direction: column;
  }
`;
