import Link from 'next/link';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Footer() {
  return (
    <S.Container as="footer">
      <S.Wrapper>
        <S.ContentLogoMobile>
          <C.Image
            src="/images/svg/logo-anqm-mobile.svg"
            alt="Logo Associação Norte-Riograndense de Criadores de Cavalo, cor do texto branco, com detalhes em verde e amarelo"
          />
        </S.ContentLogoMobile>

        <Link href={'/contato'}>
          <S.ContentContact>
            <C.Text as="p">(84) 3272-4320 | (84) 9974-5202</C.Text>
            <C.Text as="p">anqm@anqm.com.br </C.Text>
          </S.ContentContact>
        </Link>

        <S.ContentLogo>
          <C.Image
            src="/images/svg/logo-anqm.svg"
            alt="Logo Associação Norte-Riograndense de Criadores de Cavalo, cor do texto branco, com detalhes em verde e amarelo"
          />
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
                alt="Ícone instagram, quadrado com borda arredondada com um círculo no meio, ambos cinza escuro"
              />
              <C.Text as="p">@anqm</C.Text>
            </S.ContentInstagram>
          </a>
        </S.ContentSocialLinks>
      </S.Wrapper>

      <S.ContentNavigation>
        <ul>
          <li>Início</li>
          <li>Notícias</li>
          <li>Institucional</li>
          <li>Ranking</li>
          <li>Eventos</li>
          <li>Resultados</li>
          <li>Associe-se</li>
          <li>Contatos</li>
        </ul>
      </S.ContentNavigation>

      <S.ContentCopyright>
        <C.Text as="p">2022 ACQM - TODOS OS DIREITOS RESERVADOS</C.Text>
        <a
          href="https://www.iclouds.com.br/"
          target={'_blank'}
          rel="noreferrer"
        >
          <C.Image
            src="/images/svg/icon-iClouds-logo.svg"
            alt="Ícone iClouds, nuvem com letras iC com fundo cinza escuro"
          />
        </a>
      </S.ContentCopyright>
    </S.Container>
  );
}
