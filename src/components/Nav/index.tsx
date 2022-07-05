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
          <C.Image
            src={
              styletype
                ? '/images/svg/logo-anqm-nav.svg'
                : '/images/svg/logo-anqm-dark.svg'
            }
            alt="Logo Associação Norte-Riograndense de Criadores de Cavalo, cor do texto branco, com detalhes em verde e amarelo"
          />
        </S.ContentLogo>

        <S.ContentNavigation>
          {data.navigation.map((item) => (
            <NextLink key={item.id} href={item.url}>
              <S.Link styletype={styletype}>{item.title}</S.Link>
            </NextLink>
          ))}
        </S.ContentNavigation>

        <S.ContentSocialLinks>
          <C.Image
            src="/images/svg/icon-facebook.svg"
            alt="Ícone facebook, quadrado com borda arredondada com a letra f, ambos cinza escuro"
          />
          <C.Image
            src="/images/svg/icon-instagram.svg"
            alt="Ícone instagram, quadrado com borda arredondada com um círculo no meio, ambos cinza escuro"
          />
        </S.ContentSocialLinks>
      </S.Wrapper>
    </S.Container>
  );
}
