import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: center;

  background-color: rgba(242, 183, 5, 0.1);
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 5rem 0 0;
  max-width: 124rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 2rem 4rem 0;
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

    @media (max-width: 479px) {
      font-size: 2.2rem;
      line-height: 2.6rem;
    }
  }

  > p {
    margin-bottom: 2rem;

    color: #a1a1a1;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      margin-bottom: 1rem;

      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
`;

export const ContentImage = styled(C.Flex)`
  width: 23rem;
  height: 23rem;

  justify-content: center;

  @media (max-width: 479px) {
    width: 18rem;
    height: 18rem;
  }
`;
