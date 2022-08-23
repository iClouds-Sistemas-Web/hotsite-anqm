import Link from 'next/link';
import NextLink from 'next/link';

import { data } from '~/utils/data';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Footer() {
  return (
    <S.Container as="footer">
      <S.Wrapper>
        <S.ContentLogoMobile>
          <NextLink href="/">
            <C.Link>
              <C.Image
                src="/images/svg/logo-anqm-mobile.svg"
                fallbackSrc="/images/svg/logo-anqm-mobile.svg"
                alt="Logo Associação Norte-Riograndense de Criadores de Cavalo, cor do texto branco, com detalhes em verde e amarelo"
              />
            </C.Link>
          </NextLink>
        </S.ContentLogoMobile>

        <Link href={'/contato'}>
          <S.ContentContact>
            <C.Text as="p">(84) 99964-3550</C.Text>
            <C.Text as="p">anqm@anqm.com.br </C.Text>
          </S.ContentContact>
        </Link>

        <S.ContentLogo>
          <NextLink href="/">
            <C.Link>
              <C.Image
                src="/images/svg/logo-anqm.svg"
                fallbackSrc="/images/svg/logo-anqm.svg"
                alt="Logo Associação Norte-Riograndense de Criadores de Cavalo, cor do texto branco, com detalhes em verde e amarelo"
              />
            </C.Link>
          </NextLink>
        </S.ContentLogo>

        <S.ContentSocialLinks>
          <a
            href="https://www.facebook.com/anqmoficial/"
            target={'_blank'}
            rel="noreferrer"
          >
            <S.ContentFacebook>
              <C.Image
                src="/images/svg/icon-facebook.svg"
                fallbackSrc="/images/svg/icon-facebook.svg"
                alt="Ícone facebook, quadrado com borda arredondada com a letra f, ambos cinza escuro"
              />
              <C.Text as="p">/anqm</C.Text>
            </S.ContentFacebook>
          </a>
          <a
            href="https://www.instagram.com/anqmoficial/"
            target={'_blank'}
            rel="noreferrer"
          >
            <S.ContentInstagram>
              <C.Image
                src="/images/svg/icon-instagram.svg"
                fallbackSrc="/images/svg/icon-instagram.svg"
                alt="Ícone instagram, quadrado com borda arredondada com um círculo no meio, ambos cinza escuro"
              />
              <C.Text as="p">@anqm</C.Text>
            </S.ContentInstagram>
          </a>
        </S.ContentSocialLinks>
      </S.Wrapper>

      <S.ContentNavigation>
        {data.navigation.map((item) =>
          item.externalLink === true ? (
            <S.Link key={item.id} href={item.url} target="_blank">
              {item.title}
            </S.Link>
          ) : (
            <NextLink key={item.id} href={item.url}>
              <S.Link>{item.title}</S.Link>
            </NextLink>
          )
        )}
      </S.ContentNavigation>

      <a
        href="https://www.iclouds.com.br/"
        style={{ width: '100%' }}
        target={'_blank'}
        rel="noreferrer"
      >
        <S.ContentCopyright>
          <C.Text as="p">2022 ACQM - TODOS OS DIREITOS RESERVADOS</C.Text>

          <C.Image
            src="/images/svg/icon-iClouds-logo.svg"
            alt="Ícone iClouds, nuvem com letras iC com fundo cinza escuro"
          />
        </S.ContentCopyright>
      </a>
    </S.Container>
  );
}
