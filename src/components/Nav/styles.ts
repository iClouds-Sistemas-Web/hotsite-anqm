import styled from '@emotion/styled';
import * as C from '@chakra-ui/react';

import { css } from '@emotion/react';

import { personTheme as theme } from '~/styles/theme';

interface NavProps {
  styletype?: 'primary' | 'secondary';
}

export const Container = styled(C.Flex)<NavProps>`
  z-index: 2000;

  width: 100%;
  height: auto;

  justify-content: center;

  backdrop-filter: blur(5px);

  ${({ styletype }) => css`
    ${styletype === 'primary'
      ? 'background: rgba(0, 0, 0, 0.6);'
      : 'background: rgba(255, 255, 255, 0.6); border-bottom: 1px solid #E3E3E3;'}
  `}

  @media (max-width: 479px) {
    top: 0;
    left: 0;
    z-index: 100;
    position: fixed;
  }
`;

export const ContentToggle = styled(C.Flex)`
  top: 0;
  left: 0;
  position: absolute;

  width: 100%;
  height: auto;
  max-width: 7rem;
  min-height: 8rem;

  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 1279px) {
    display: flex;
  }
`;

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 0 10rem;
  max-width: 192rem;
  min-height: 10rem;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1310px) {
    padding: 0 7rem;
    min-height: 8rem;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const ContentLogo = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 19rem;

  align-items: center;
  justify-content: center;

  > img {
    width: 19rem;
    height: 5rem;
  }
`;

export const ContentNavigation = styled(C.Flex)`
  width: 100%;
  height: auto;
  min-height: 9rem;
  margin-left: auto;
  max-width: 71.7rem;

  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const Link = styled(C.Link)<NavProps>`
  ${({ styletype }) => css`
    ${styletype === 'primary' ? 'color: #ffffff;' : 'color: #333333;'}
  `}
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2.8rem;
  font-family: ${theme.fonts.roboto};

  ::after {
    padding-left: 2rem;

    content: '';
    opacity: 0.8;
    border-right: 0.5px solid rgba(255, 255, 255, 0.15);
  }

  :nth-of-type(8)::after {
    border: none;
    padding-left: 0rem;
  }
`;

export const ContentSocialLinks = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 11.2rem;
  padding-left: 4rem;

  gap: 2rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 767px) {
    display: none;
  }
`;
