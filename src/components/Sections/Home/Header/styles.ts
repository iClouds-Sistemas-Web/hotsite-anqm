import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 144rem;
  max-height: 50rem;

  flex-direction: column;

  @media (min-width: 1441px) {
    max-width: 100%;
  }

  @media (max-width: 1279px) {
    max-height: 40rem;
  }
`;

export const Wrapper = styled(C.Flex)`
  top: -10rem;
  position: relative;

  width: 100%;
  height: auto;
  min-height: 60rem;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/png/img-banner.png');

  @media (max-width: 1279px) {
    min-height: 50rem;
    background-position-x: 50%;
  }

  @media (max-width: 479px) {
    top: 0;

    min-height: 31.6rem;

    background-image: url('/images/png/img-banner-mobile.png');
  }
`;

export const ContentArrow = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 0 2rem;

  align-items: center;

  > img {
    width: 6rem;
    height: 6rem;

    @media (max-width: 900px) {
      width: 4rem;
      height: 4rem;
    }

    @media (max-width: 479px) {
      width: 3rem;
      height: 3rem;
    }
  }

  .right {
    margin-left: auto;
  }

  @media (max-width: 479px) {
    padding: 0;
  }
`;
