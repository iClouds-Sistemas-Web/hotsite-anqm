import * as S from './styles';
import * as C from '@chakra-ui/react';

export function CardSponsors() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentImage>
          <C.Image
            src="/images/svg/logo-equester-sponsors.svg"
            alt="Logo eQuester cor açaí, com fundo branco"
          />
        </S.ContentImage>
      </S.Wrapper>
    </S.Container>
  );
}
