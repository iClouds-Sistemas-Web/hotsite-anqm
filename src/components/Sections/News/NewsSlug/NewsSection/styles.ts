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
  padding: 0 2rem;
  max-width: 128rem;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1279px) {
    max-width: 100%;
  }

  @media (max-width: 479px) {
    padding: 0 2rem 1rem;
  }
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 8rem;

  margin: 2rem 0 5rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 479px) {
    margin: 1rem 0 3rem;
  }

  > h2 {
    color: #1a1a1a;
    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    font-family: ${theme.fonts.anton};

    @media (max-width: 767px) {
      text-align: center;

      font-size: 4rem;
      line-height: 4.9rem;
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
