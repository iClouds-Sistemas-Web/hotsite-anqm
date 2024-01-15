import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Pagination = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding-bottom: 1rem;

  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  span {
    width: 2rem;
    height: 2rem;
    background-color: #b7b7b7;
  }

  .flicking-pagination-bullet {
    margin: 0;
  }

  .flicking-pagination-bullet-active {
    background-color: #0e4f25;
  }
`;
