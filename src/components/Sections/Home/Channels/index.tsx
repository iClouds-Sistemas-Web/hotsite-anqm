import NextLink from 'next/link';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Channels() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <NextLink href="/associar">
          <C.Link style={{ textDecoration: 'none' }}>
            <S.ContentButton>
              <S.ContentIcon>
                <C.Image
                  alt="Imagem circular de cor laranja"
                  src="/images/svg/ellipse-associate-orange.svg"
                  fallbackSrc="/images/svg/ellipse-associate-orange.svg"
                />
                <C.Image
                  className="ellipse-white"
                  alt="Imagem circular de cor branco"
                  src="/images/svg/ellipse-associate-white.svg"
                  fallbackSrc="/images/svg/ellipse-associate-white.svg"
                />
                <C.Image
                  className="icon"
                  src="/images/svg/icon-associate.svg"
                  alt="Ícone três pessoas com borda laranja"
                  fallbackSrc="/images/svg/icon-associate.svg"
                />
              </S.ContentIcon>

              <C.Text as="h1">Associe-se</C.Text>
              <p>
                Seja você também um sócio!
                <br /> Desfrute das vantagens e diferenciais juntando-se a nós.
              </p>
            </S.ContentButton>
          </C.Link>
        </NextLink>

        <a href="//www.equester.com.br/" target={'_blank'} rel="noreferrer">
          <S.ContentButton>
            <S.ContentIcon>
              <C.Image
                alt="Imagem circular de cor laranja"
                src="/images/svg/ellipse-associate-orange.svg"
                fallbackSrc="/images/svg/ellipse-associate-orange.svg"
              />
              <C.Image
                className="ellipse-white"
                alt="Imagem circular de cor branco"
                src="/images/svg/ellipse-associate-white.svg"
                fallbackSrc="/images/svg/ellipse-associate-white.svg"
              />
              <C.Image
                className="icon"
                src="/images/svg/icon-ranking.svg"
                fallbackSrc="/images/svg/icon-ranking.svg"
                alt="Ícone troféu com uma estrela no meio de cor laranja"
              />
            </S.ContentIcon>
            <C.Text as="h1">Ranking</C.Text>
            <p>
              Confira o ranking completo!
              <br /> Todas as etapas dos campeonatos para você conferir.
            </p>
          </S.ContentButton>
        </a>

        <NextLink href="/#events">
          <C.Link style={{ textDecoration: 'none' }}>
            <S.ContentButton>
              <S.ContentIcon>
                <C.Image
                  alt="Imagem circular de cor laranja"
                  src="/images/svg/ellipse-associate-orange.svg"
                  fallbackSrc="/images/svg/ellipse-associate-orange.svg"
                />
                <C.Image
                  className="ellipse-white"
                  alt="Imagem circular de cor branco"
                  src="/images/svg/ellipse-associate-white.svg"
                  fallbackSrc="/images/svg/ellipse-associate-white.svg"
                />
                <C.Image
                  className="icon"
                  src="/images/svg/icon-events.svg"
                  alt="Ícone calendário com borda laranja"
                  fallbackSrc="/images/svg/icon-events.svg"
                />
              </S.ContentIcon>
              <C.Text as="h1">Eventos</C.Text>
              <p>
                Veja os próximos eventos!
                <br /> Fique por dentro de todas as novidades.
              </p>
            </S.ContentButton>
          </C.Link>
        </NextLink>
      </S.Wrapper>
    </S.Container>
  );
}
