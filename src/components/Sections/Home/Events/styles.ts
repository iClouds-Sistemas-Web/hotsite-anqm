import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: center;

  background-color: #c4c4c4;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 10rem 0;

  flex-direction: column;

  .flicking-viewport {
    padding: 0 18.5rem;

    @media (max-width: 1279px) {
      padding: 0 12.5rem;
    }

    @media (max-width: 991px) {
      padding: 0 10.6rem;
    }

    @media (max-width: 767px) {
      padding: 0 5.3rem;
    }
  }

  @media (max-width: 767px) {
    padding: 5rem 0;
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 8rem;
  margin-bottom: 5rem;

  align-items: center;
  justify-content: center;

  background-color: #8b8787;

  > h2 {
    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      font-size: 3.4rem;
      line-height: 3.9rem;
    }
  }

  @media (max-width: 1279px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 479px) {
    min-height: 6rem;
  }
`;

export const ContentEvent = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: auto;
  min-height: 37rem;
  max-width: 29.5rem;
  min-width: 29.5rem;
  margin-right: 2rem;

  background-color: #dddddd;

  > img {
    top: 50%;
    left: 50%;
    position: absolute;

    margin-top: -3.4rem;
    margin-left: -3rem;
  }

  @media (max-width: 479px) {
    max-width: 20rem;
    min-width: 20rem;
    min-height: 25rem;
  }
`;
