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

  border-bottom: 1px solid #d3d3d3;

  > h2 {
    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    font-family: ${theme.fonts.anton};

    color: #0e4f25;

    @media (max-width: 479px) {
      font-size: 3.4rem;
      line-height: 3.9rem;
    }
  }

  @media (max-width: 479px) {
    min-height: 6rem;
    margin-bottom: 2rem;
  }
`;

export const ContentDescription = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 82rem;
  margin-bottom: 3rem;

  > p {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 3rem;
    text-align: center;
    font-family: ${theme.fonts.roboto};
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

  background-color: #f2b705;
  border-radius: 0.4rem;

  color: #ffffff;
  font-weight: 600;
  font-size: 1.9rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  font-family: ${theme.fonts.roboto};

  &:hover {
    background-color: #000000;
  }

  @media (max-width: 767px) {
    min-width: 25rem;
    min-height: 6rem;
  }
`;
