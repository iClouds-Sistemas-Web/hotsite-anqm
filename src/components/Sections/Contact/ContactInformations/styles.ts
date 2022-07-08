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
    min-height: 4.6rem;
    margin-bottom: 1rem;
  }
`;

export const InformationsGroup = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 1rem;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ContentInformations = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 61.5rem;

  flex-direction: column;
`;

export const ContentAddress = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;

  flex-direction: column;

  > h3 {
    font-weight: 600;
    font-size: 1.9rem;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }

  > p {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

export const ContentContactDescription = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;

  flex-direction: column;

  > h3 {
    font-weight: 600;
    font-size: 1.9rem;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

export const ContactGroup = styled(C.Flex)`
  width: 100%;
  height: auto;
  margin-bottom: 0.4rem;

  align-items: center;
  justify-content: flex-start;

  > p {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ContentIcon = styled(C.Flex)`
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 0.5rem;
`;

export const ContentMap = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 61.5rem;
  min-height: 33.9rem;

  background-size: auto;
  background-repeat: no-repeat;
  background-position-x: 45%;
  background-image: url('images/png/map-contact.png');

  @media (max-width: 991px) {
    min-height: 40rem;
  }

  @media (max-width: 479px) {
    min-height: 33.9rem;
  }
`;
