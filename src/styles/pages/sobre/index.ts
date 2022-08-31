import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  flex-direction: column;

  background-color: #fbfbfb;

  @media (max-width: 479px) {
    position: relative;

    padding-top: 8rem;
  }
`;

export const Wrapper = styled(C.Flex)`
  padding: 5rem 0 0;

  flex: 1;
  flex-direction: column;

  background-color: #fbfbfb;

  @media (max-width: 767px) {
    padding: 3rem 0 0;
  }
`;
