import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 0 10rem 10rem;

  justify-content: center;

  @media (max-width: 1279px) {
    padding: 0 7rem 7rem;
  }

  @media (max-width: 767px) {
    padding: 0 2rem 5rem;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 124rem;

  align-items: center;
  flex-direction: column;
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 8rem;
  margin-bottom: 3rem;

  align-items: center;
  justify-content: center;

  > h2 {
    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.anton};

    @media (max-width: 479px) {
      font-size: 4rem;
      line-height: 3.9rem;
    }
  }

  @media (max-width: 479px) {
    min-height: 6rem;
    margin-bottom: 1rem;

    justify-content: center;
  }
`;

export const ContentDescription = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 82rem;
  margin-bottom: 3rem;

  flex-direction: column;

  > p {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 3rem;
    text-align: center;
    font-family: ${theme.fonts.roboto};
  }

  @media (max-width: 479px) {
    margin-bottom: 2rem;
  }
`;

export const ContentButton = styled(C.Flex)`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: center;
`;

export const Button = styled(C.Button)`
  min-width: 40rem;
  min-height: 8rem;

  display: none;

  color: #ffffff;
  font-weight: 600;
  font-size: 1.9rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  background-color: #f2b705;
  font-family: ${theme.fonts.roboto};

  @media (max-width: 767px) {
    min-width: 25rem;
    min-height: 6rem;
  }
`;
