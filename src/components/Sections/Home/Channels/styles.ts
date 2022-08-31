import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem 0 0;

  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    padding: 1rem 2rem 0;
  }

  @media (max-width: 767px) {
    padding: 1rem 8rem 0;

    gap: 4rem;
  }

  @media (max-width: 479px) {
    padding: 0 0 5rem;

    > a {
      max-height: 11.2rem;
    }
  }
`;

export const ContentButton = styled(C.Flex)`
  top: -4rem;
  position: relative;

  width: 100%;
  height: auto;
  max-width: 31rem;
  padding: 0 4.7rem;
  min-height: 16.2rem;
  max-height: 16.2rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px;
  background-color: ${theme.colors.white};

  @media (max-width: 479px) {
    top: 4rem;

    max-width: 27rem;
    min-width: 27rem;
    padding: 0 0 1rem;
    min-height: 11.2rem;
    max-height: 11.2rem;
    margin-bottom: 0.5rem;
  }

  > h1 {
    top: 5rem;
    position: absolute;

    margin-bottom: 0.5rem;

    color: #2a2a2a;
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 3.5rem;
    font-family: ${theme.fonts.roboto_condensed};

    @media (max-width: 479px) {
      top: 3.7rem;

      font-size: 2.3rem;
      line-height: 2.8rem;
    }
  }

  p {
    width: 100%;
    margin-top: 0.5rem;

    text-align: center;

    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: ${theme.colors.text.footer};
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      font-size: 0.9rem;
      line-height: 1.9rem;
    }
  }
`;

export const ContentIcon = styled(C.Flex)`
  top: -3rem;
  position: relative;

  width: 7.4rem;
  height: 7.4rem;

  .ellipse-white {
    left: -7.2rem;
    bottom: -0.3rem;
    position: relative;

    width: 7rem;

    @media (max-width: 479px) {
      left: -5.8rem;
      bottom: -0.3rem;
      position: relative;

      width: 5.6rem;
    }
  }

  .icon {
    left: -12.7rem;
    position: relative;

    width: 4rem;

    @media (max-width: 479px) {
      left: -10.1rem;

      width: 3rem;
    }
  }

  @media (max-width: 479px) {
    width: 6rem;
    height: 6rem;
  }
`;
