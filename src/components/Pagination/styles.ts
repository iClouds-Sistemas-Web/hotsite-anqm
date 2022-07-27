import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  > button {
    width: 3.2rem;
    height: 3.2rem;

    color: #333333;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2rem;
    background: transparent;
    font-family: ${theme.fonts.roboto};

    &:hover {
      border: none;
      background-color: #dbead5;
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

export const Content = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  > button {
    width: 3.2rem;
    height: 3.2rem;

    font-size: 2rem;
    font-weight: 400;
    line-height: 2rem;
    background: #0e4f25;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.roboto};

    &:hover {
      border: none;
      background-color: #0a381a;
    }

    &:focus {
      box-shadow: none;
    }
  }
`;
