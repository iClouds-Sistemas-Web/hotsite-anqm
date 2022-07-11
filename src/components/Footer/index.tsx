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

        <S.ContentContact>
          <C.Text as="p">(84) 3272-4320 | (84) 9974-5202</C.Text>
          <C.Text as="p">anqm@anqm.com.br </C.Text>
        </S.ContentContact>

        <S.ContentLogo>
          <C.Image
            src="/images/svg/logo-anqm.svg"
            alt="Logo Associação Norte-Riograndense de Criadores de Cavalo, cor do texto branco, com detalhes em verde e amarelo"
          />
        </S.ContentLogo>

        <S.ContentSocialLinks>
          <S.ContentFacebook>
            <C.Image
              src="/images/svg/icon-facebook.svg"
              alt="Ícone facebook, quadrado com borda arredondada com a letra f, ambos cinza escuro"
            />
            <C.Text as="p">/anqm</C.Text>
          </S.ContentFacebook>
          <S.ContentInstagram>
            <C.Image
              src="/images/svg/icon-instagram.svg"
              alt="Ícone instagram, quadrado com borda arredondada com um círculo no meio, ambos cinza escuro"
            />
            <C.Text as="p">@anqm</C.Text>
          </S.ContentInstagram>
        </S.ContentSocialLinks>
      </S.Wrapper>

      <S.ContentNavigation>
        <ul>
          <li>Início</li>
          <li>Notícias</li>
          <li>Instituição</li>
          <li>Ranking</li>
          <li>Eventos</li>
          <li>Resultados</li>
          <li>Associe-se</li>
          <li>Contatos</li>
        </ul>
      </S.ContentNavigation>

      <S.ContentCopyright>
        <C.Text as="p">2022 ACQM - TODOS OS DIREITOS RESERVADOS</C.Text>
        <C.Image
          src="/images/svg/icon-iClouds-logo.svg"
          alt="Ícone iClouds, nuvem com letras iC com fundo cinza escuro"
        />
      </S.ContentCopyright>
    </S.Container>
  );
}
