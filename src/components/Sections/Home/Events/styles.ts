import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 192rem;
  min-height: 70rem;

  @media (max-width: 479px) {
    min-height: 50rem;
  }
`;

export const Wrapper = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: auto;
  padding: 10rem 0 0;

  flex-direction: column;

  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0px 4px 30px #512940;
  background-image: url('/images/png/bg-events.png');

  .flicking-viewport {
    height: 100%;
    padding: 5rem 19.5rem;

    .flicking-camera {
      .flicking-panel {
        width: auto;
        height: auto;
        max-height: 39rem;
        max-width: 27.5rem;
        margin-right: 4rem;

        display: flex;

        @media (max-width: 479px) {
          max-width: 24rem;
          max-height: 32rem;
          margin-right: 1.5rem;
        }
      }
    }

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
    padding: 6rem 0 5rem;
  }

  @media (max-width: 479px) {
    padding: 8rem 0 0;

    background-position-x: 45%;
    box-shadow: inset 0px 1px 15px #512940;
  }
`;

export const ContentEQuesterImage = styled(C.Flex)`
  right: 4rem;
  top: -5.6rem;
  position: absolute;

  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    max-width: 20rem;

    cursor: pointer;

    @media (max-width: 991px) {
      right: -3.1rem;
      position: relative;
    }

    @media (max-width: 767px) {
      top: 1rem;
      right: -3rem;

      max-width: 17rem;
    }

    @media (max-width: 479px) {
      max-width: 13rem;
    }
  }

  @media (max-width: 991px) {
    right: 0;
  }

  @media (max-width: 479px) {
    top: -4.5rem;
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 7rem;

  text-align: center;
  justify-content: center;

  > h2 {
    color: #fdc973;
    font-size: 7rem;
    font-weight: 400;
    line-height: 5.5rem;
    font-family: ${theme.fonts.anton};
    text-shadow: 0px 5px 10px rgba(81, 41, 64, 0.9);

    @media (max-width: 767px) {
      font-size: 5rem;
    }

    @media (max-width: 479px) {
      color: #febe55;
      font-size: 4rem;
      line-height: 3.9rem;
      text-shadow: 0px 5px 10px rgba(56, 40, 28, 0.55);
    }
  }

  @media (max-width: 1279px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 767px) {
    margin-top: 4rem;
  }

  @media (max-width: 479px) {
    min-height: 5rem;

    margin: 1rem 0 0;
    text-align: center;
    justify-content: center;
  }
`;
