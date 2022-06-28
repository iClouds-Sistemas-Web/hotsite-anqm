import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  justify-content: center;
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 128rem;
  padding: 0 2rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 100%;
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 8rem;

  margin-bottom: 5rem;

  align-items: center;
  justify-content: center;

  > h2 {
    margin-right: 2rem;
    min-width: max-content;

    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 767px) {
      margin-right: 0;
    }

    @media (max-width: 479px) {
      font-size: 3.4rem;
      line-height: 3.9rem;
    }
  }

  @media (max-width: 767px) {
    min-height: 6rem;
    margin-bottom: 3rem;
  }
`;

export const ContentMoreNews = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1279px) {
    gap: 1.95rem;
  }

  @media (max-width: 527px) {
    gap: 2rem;
    flex-direction: column;
  }
`;
