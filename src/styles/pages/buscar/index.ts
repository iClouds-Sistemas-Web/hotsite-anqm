import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '../../../styles/theme';

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
  padding: 5rem 10rem 0;

  flex: 1;
  flex-direction: column;

  @media (max-width: 1279px) {
    padding: 3rem 2rem 0;
  }

  @media (max-width: 479px) {
    padding: 3rem 0 0;
  }

  > section:first-of-type {
    > div {
      > div {
        border-bottom: 1px solid #dddddd;

        @media (max-width: 767px) {
          margin-bottom: 1rem;

          border: none;

          h2 {
            width: 100%;

            text-align: center;

            border-bottom: 1px solid #dddddd;
          }
        }
      }

      @media (max-width: 1279px) {
        padding: 0 2rem 3rem;
      }

      @media (max-width: 479px) {
        padding: 0 2rem 1rem;
      }
    }
  }
`;

export const InputGroup = styled(C.InputGroup)`
  width: 100%;
  height: auto;
`;

export const InputRightElement = styled(C.InputRightElement)`
  width: 4.8rem;
  height: 4.8rem;

  button {
    width: 3.2rem;
    height: 3.2rem;

    border-radius: 4px;
    background-color: #0e4f25;
  }

  svg {
    width: 100%;
    height: 1.75rem;

    color: ${theme.colors.white};
  }
`;

export const Input = styled(C.Input)`
  width: 100%;
  height: 4.8rem;

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: ${theme.fonts.roboto};
  background-color: ${theme.colors.white};

  &::placeholder {
    color: #777777;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
