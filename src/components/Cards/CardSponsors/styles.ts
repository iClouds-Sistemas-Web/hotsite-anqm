import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
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
    max-height: 16.3rem;
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
  width: 100%;
  height: auto;
  padding: 5rem 2rem;

  justify-content: center;
`;
