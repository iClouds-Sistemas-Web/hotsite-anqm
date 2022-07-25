import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  justify-content: center;

  background-color: ${theme.colors.secondary};
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 124rem;
  padding: 5rem 0 0 0;

  flex-direction: column;
  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 100%;
    padding: 5rem 0 0 2rem;
  }

  @media (max-width: 479px) {
    padding: 2rem;
  }
`;

export const List = styled(Flex)``;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    margin-bottom: 3rem;
    margin-left: 0.5rem;

    cursor: pointer;
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    font-family: ${theme.fonts.roboto};

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      margin-bottom: 0;
      margin-left: 0;

      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  p {
    cursor: pointer;
    width: 100%;
    max-width: 82rem;
    margin-bottom: 3rem;
    margin-left: 0.5rem;

    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.4rem;
    white-space: normal;
    font-family: ${theme.fonts.roboto};

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      margin-left: 0;

      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export const ListItemContent = styled(C.Flex)`
  > span {
    min-width: fit-content;

    @media (max-width: 767px) {
      &:last-of-type {
        display: none;
      }
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 1rem;

    flex-direction: column;
  }
`;

export const ContentPagination = styled(C.Flex)`
  margin: 5rem 0;

  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 479px) {
    margin: 2rem 0 0;
  }
`;
