import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: center;

  background-color: #f2f2f2;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 5rem 5rem;
  max-width: 124rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 2rem;
    max-width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 3rem;

  display: flex;
  align-items: flex-start;

  > p:first-of-type {
    min-width: 20rem;
    margin-right: 1rem;

    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  > p:last-of-type {
    width: 100%;
    max-width: 82rem;

    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.4rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 2rem;

    flex-direction: column;
  }
`;
