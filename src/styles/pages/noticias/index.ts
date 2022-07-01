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
  padding: 5rem 0 0;

  flex: 1;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: 3rem 0 0;
  }

  > section:first-of-type {
    > div {
      padding: 0 0 5rem;

      > div {
        margin-bottom: 5rem;

        border-bottom: 1px solid #d3d3d3;

        @media (max-width: 767px) {
          margin-bottom: 2rem;

          border-bottom: none;
        }

        h2 {
          display: none;
        }
      }

      @media (max-width: 1279px) {
        padding: 0 2rem 3rem;
      }
    }
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: 8rem;
  max-width: 60.9rem;

  justify-content: flex-start;

  > span {
    font-size: 5rem;
    font-weight: 400;
    line-height: 9rem;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.anton};

    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    @media (max-width: 479px) {
      width: 100%;

      text-align: center;

      font-size: 3.4rem;
      line-height: 3.9rem;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 479px) {
    height: 3.9rem;
  }
`;

export const InputGroup = styled(C.InputGroup)`
  width: 100%;
  height: auto;
  padding-top: 2rem;

  @media (max-width: 479px) {
    padding-top: 1.5rem;
  }
`;

export const InputLeftElement = styled(C.InputLeftElement)`
  width: 4.8rem;
  height: 4.8rem;
  margin-top: 2rem;

  > svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  @media (max-width: 479px) {
    margin-top: 1.5rem;
  }
`;

export const Input = styled(C.Input)`
  width: 100%;
  height: 4.8rem;
  padding-left: 4.8rem;

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: ${theme.fonts.roboto};

  border: 1px solid #b3b3b3;

  &::placeholder {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
