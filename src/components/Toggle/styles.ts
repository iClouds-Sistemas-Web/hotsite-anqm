import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Button = styled(C.Button)`
  padding: 1rem;
  min-width: 100%;
  min-height: 100%;

  background-color: transparent;

  &:hover,
  &:active {
    background-color: transparent;
  }

  &:focus {
    box-shadow: none;
  }
`;
