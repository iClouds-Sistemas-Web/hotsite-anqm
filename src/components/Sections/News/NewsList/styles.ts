import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  justify-content: center;

  background: rgba(242, 183, 5, 0.1);
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

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 3rem;

  display: flex;
  align-items: flex-start;

  > span {
    min-width: 20rem;
    margin-right: 0.5rem;

    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  :last-of-type {
    margin-bottom: 0;
  }

  > p {
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
    margin-bottom: 1rem;

    flex-direction: column;
  }
`;

export const ContentPagination = styled(C.Flex)`
  margin: 5rem 0;

  gap: 1rem;
  align-items: center;
  justify-content: center;

  > img {
    width: 1rem;
    height: 1rem;

    :nth-of-type(1) {
      width: 3rem;
      height: 3rem;
    }

    :nth-of-type(6) {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (max-width: 479px) {
    margin: 2rem 0 0;
  }
`;
