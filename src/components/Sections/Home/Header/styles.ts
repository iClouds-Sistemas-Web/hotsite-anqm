import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;

  background-color: #dddddd;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 58rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 479px) {
    min-height: 31.6rem;
  }
`;
