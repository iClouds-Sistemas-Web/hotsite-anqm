import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 19rem;
  min-height: 19rem;

  justify-content: center;

  background-color: #dddddd;

  @media (max-width: 1279px) {
    max-width: 17.5rem;
    min-height: 17.5rem;
  }

  @media (max-width: 479px) {
    min-height: auto;
    max-width: 48.66%;
  }

  @media (max-width: 300px) {
    max-width: 100%;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
`;

export const ContentImage = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: auto;

  background-color: #dddddd;

  > img {
    top: 50%;
    left: 50%;
    position: absolute;

    margin-top: -3.4rem;
    margin-left: -3rem;
  }

  @media (max-width: 479px) {
    padding-bottom: 100%;
  }
`;
