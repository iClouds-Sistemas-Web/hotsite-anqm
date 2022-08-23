import NextLink from 'next/link';
import { data } from '~/utils/data';
import { Toggle } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

interface NavProps {
  styletype?: 'primary' | 'secondary';
}

export function Nav({ styletype }: NavProps) {
  return (
    <S.Container as="nav" styletype={styletype}>
      <S.ContentToggle>
        <Toggle styletype={styletype} />
      </S.ContentToggle>

      <S.Wrapper>
        <S.ContentLogo>
          <NextLink href="/">
            <C.Link>
              <C.Image
                src={
                  styletype
                    ? '/images/svg/logo-anqm-nav.svg'
                    : '/images/svg/logo-anqm-dark.svg'
                }
                fallbackSrc={
                  styletype
                    ? '/images/svg/logo-anqm-nav.svg'
                    : '/images/svg/logo-anqm-dark.svg'
                }
                alt="Logo Associação Norte-Riograndense de Criadores de Cavalo com detalhes em verde e amarelo"
              />
            </C.Link>
          </NextLink>
        </S.ContentLogo>

        <S.ContentNavigation>
          {data.navigation.map((item) =>
            item.externalLink === true ? (
              <S.Link
                key={item.id}
                href={item.url}
                target="_blank"
                styletype={styletype}
              >
                {item.title}
              </S.Link>
            ) : (
              <NextLink key={item.id} href={item.url}>
                <S.Link styletype={styletype}>{item.title}</S.Link>
              </NextLink>
            )
          )}
        </S.ContentNavigation>

        <S.ContentSocialLinks>
          <a
            href="https://www.facebook.com/anqmoficial/"
            target={'_blank'}
            rel="noreferrer"
          >
            <C.Image
              src="/images/svg/icon-facebook.svg"
              fallbackSrc="/images/svg/icon-facebook.svg"
              alt="Ícone facebook, quadrado com borda arredondada com a letra f, ambos cinza escuro"
            />
          </a>
          <a
            href="https://www.instagram.com/anqmoficial/"
            target={'_blank'}
            rel="noreferrer"
          >
            <C.Image
              src="/images/svg/icon-instagram.svg"
              fallbackSrc="/images/svg/icon-instagram.svg"
              alt="Ícone instagram, quadrado com borda arredondada com um círculo no meio, ambos cinza escuro"
            />
          </a>
        </S.ContentSocialLinks>
      </S.Wrapper>
    </S.Container>
  );
}
