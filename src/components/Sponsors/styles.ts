import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 10rem;
  max-width: 144rem;

  flex-direction: column;

  @media (max-width: 1279px) {
    padding: 7rem 2rem;
  }

  @media (max-width: 767px) {
    padding: 5rem 2rem;
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 7rem;
  margin-bottom: 5rem;

  align-items: center;
  justify-content: center;

  > h2 {
    text-align: center;

    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.anton};
  }

  @media (max-width: 1279px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 479px) {
    min-height: 5rem;

    > h2 {
      font-size: 3.4rem;
      line-height: 3.9rem;
    }
  }
`;

export const ContentSponsors = styled(C.Flex)`
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 479px) {
    gap: 0.9rem;
  }

  @media (max-width: 374px) {
    gap: 0.8rem;
  }

  @media (max-width: 337px) {
    gap: 0.7rem;
  }
`;

export const ContentCardEQuester = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 19rem;
  min-height: 19rem;

  justify-content: center;

  border-radius: 5.82822px;
  background-color: #ffffff;
  border: 1.16564px solid #eeeeee;

  @media (max-width: 1279px) {
    max-width: 17.5rem;
    min-height: 17.5rem;
  }

  @media (max-width: 479px) {
    max-width: 48.66%;
    min-height: 16.3rem;
  }

  @media (max-width: 300px) {
    max-width: 100%;
  }

  > img {
    width: 100%;
    height: auto;
    padding: 0 2rem;

    justify-content: center;
  }
`;
