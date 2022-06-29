import * as S from './styles';
import * as C from '@chakra-ui/react';

export function CardSponsors() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentImage>
          <C.Image
            src="/images/png/logo-equester-sponsors.png"
            alt="Logo eQuester cor açaí, com fundo branco"
          />
        </S.ContentImage>
      </S.Wrapper>
    </S.Container>
  );
}
