import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';
import { theme } from '~/styles/theme';

export const Button = styled(C.Button)`
  padding: 1rem;
  min-width: 100%;
  min-height: 100%;

  background-color: ${theme.colors.transparent};

  &:hover,
  &:active {
    background-color: ${theme.colors.transparent};
  }

  &:focus {
    box-shadow: none;
  }
`;

export const DrawerContent = styled(C.DrawerContent)`
  max-width: 27.9rem;
`;

export const DrawerHeader = styled(C.DrawerHeader)`
  padding: 4.4rem 4.6395rem 3rem;

  background-color: transparent;

  > img {
    width: 100%;
    height: auto;
    min-height: 5rem;
  }
`;

export const Link = styled(C.Link)`
  display: flex;
  flex-direction: column;

  color: #1a1a1a;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 5rem;
  border-bottom: 1px solid #dddddd;
  font-family: ${theme.fonts.roboto};

  :nth-of-type(8) {
    border: none;
  }
`;

export const DrawerFooter = styled(C.DrawerFooter)`
  padding-bottom: 3rem;

  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
