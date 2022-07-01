import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  flex-direction: column;

  background-color: #fbfbfb;
`;

export const Wrapper = styled(C.Flex)`
  flex: 1;
  flex-direction: column;
`;
