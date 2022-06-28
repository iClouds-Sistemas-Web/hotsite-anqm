import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '../../../styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  flex-direction: column;
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

export const InputLeftElement = styled(C.InputLeftElement)`
  width: 4.8rem;
  height: 4.8rem;

  > svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export const Input = styled(C.Input)`
  width: 100%;
  height: 4.8rem;
  padding-left: 4.8rem;

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: ${theme.fonts.roboto};

  &::placeholder {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
