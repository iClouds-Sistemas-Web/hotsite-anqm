import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 29.5rem;

  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 31.87%;
  }

  @media (max-width: 991px) {
    width: 48%;
    max-width: 100%;
    min-width: 29.5rem;
  }

  @media (max-width: 767px) {
    min-width: auto;
  }

  @media (max-width: 527px) {
    width: 100%;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;

  flex-direction: column;

  @media (max-width: 527px) {
    flex-direction: row;
  }
`;

export const ContentImage = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  padding-bottom: 64.41%;

  background-color: #dddddd;

  > img {
    position: absolute;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (max-width: 991px) {
    padding-bottom: 65.253%;
  }

  @media (max-width: 767px) {
    padding-bottom: 63.05%;
  }

  @media (max-width: 527px) {
    margin-bottom: 0;
    margin-right: 1rem;
    padding-bottom: 38.81%;
  }
`;

export const ContentDescription = styled(C.Flex)`
  width: 100%;
  height: auto;

  flex-direction: column;

  > span {
    margin-bottom: 1rem;

    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.5rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 991px) {
      margin-bottom: 0.5rem;

      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  > h2 {
    font-weight: 600;
    font-size: 1.9rem;
    line-height: 2.4rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      font-size: 1.7rem;
      line-height: 1.9rem;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 527px) {
    width: 84.36%;
    padding: 0.5rem 0 0 0.5rem;
  }
`;
