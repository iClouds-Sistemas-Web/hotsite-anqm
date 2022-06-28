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
  padding: 5rem 0 0;
  max-width: 124rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 2rem;
    max-width: 100%;
  }
`;

export const ContentText = styled(C.Flex)`
  width: 100%;
  height: auto;

  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > h1 {
    margin-bottom: 2rem;

    color: #2a2a2a;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }

  > p {
    margin-bottom: 2rem;

    color: #a1a1a1;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }
`;

export const ContentImage = styled(C.Flex)`
  width: 23rem;
  height: 23rem;

  background: #d9d9d9;
`;
