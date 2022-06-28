import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  flex-direction: column;
  justify-content: center;

  background-color: #c4c4c4;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 3rem 10rem;

  gap: 7.2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1279px) {
    padding: 3rem 7rem;

    gap: 2.9rem;
  }

  @media (max-width: 767px) {
    padding: 2rem 5.2rem;

    gap: 0.5rem;
    flex-direction: column;
  }
`;

export const ContentButton = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-width: 24rem;
  min-height: 13rem;
  max-width: 29.5rem;

  background-color: #dddddd;

  @media (max-width: 767px) {
    min-width: 100%;
  }

  @media (max-width: 479px) {
    min-height: 10rem;
  }
`;
