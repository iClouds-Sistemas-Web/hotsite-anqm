import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { personTheme as theme } from '~/styles/theme';

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 0 10rem;

  justify-content: center;

  background-color: #fbfbfb;

  @media (max-width: 1279px) {
    padding: 0 7rem;
  }

  @media (max-width: 767px) {
    padding: 0 2rem;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 124rem;

  flex-direction: column;
`;

export const ContentTitle = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 8rem;
  margin-bottom: 3rem;

  align-items: center;
  justify-content: flex-start;

  border-bottom: 2px solid #dddddd;

  > h2 {
    font-size: 5rem;
    font-weight: 400;
    line-height: 5.5rem;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.anton};

    @media (max-width: 479px) {
      font-size: 3.4rem;
      line-height: 3.9rem;
    }
  }

  @media (max-width: 991px) {
    margin-bottom: 0;

    justify-content: center;

    border-bottom: none;
  }

  @media (max-width: 479px) {
    min-height: 6rem;

    border-bottom: none;
  }
`;

export const AboutGroup = styled(C.Flex)`
  width: 100%;
  height: auto;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ContentAside = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 28.5rem;
  min-height: 101rem;
  margin-right: 10.5rem;
  padding: 0.5rem 1rem 0 2rem;

  border-right: 1px solid #d3d3d3;
  background-color: ${theme.colors.secondary};

  @media (max-width: 1279px) {
    margin-right: 2rem;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 2rem;

  align-items: flex-start;

  font-weight: 400;
  font-size: 1.9rem;
  line-height: 2.4rem;
  font-family: ${theme.fonts.roboto};
`;

export const ContentSelect = styled(C.Flex)`
  margin-bottom: 2rem;

  display: none;

  @media (max-width: 991px) {
    display: flex;
  }
`;

export const Select = styled(C.Select)`
  width: 100%;
  height: auto;
  min-height: 4.8rem;

  color: #666666;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: ${theme.fonts.roboto};

  > option {
    font-size: 1.6rem;
  }
`;

export const ContentInformations = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 71.5rem;

  flex-direction: column;

  > h1 {
    margin-bottom: 3rem;

    font-weight: 700;
    font-size: 3.5rem;
    line-height: 4rem;
    font-family: ${theme.fonts.roboto};

    @media (max-width: 479px) {
      margin-bottom: 2rem;

      font-weight: 600;
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }

  > p {
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 3rem;
    font-family: ${theme.fonts.roboto};
  }
`;
