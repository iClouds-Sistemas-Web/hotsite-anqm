import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Header() {
  return (
    <S.Container as="header">
      <S.Wrapper>
        <C.Image src="/images/png/image.png" />
      </S.Wrapper>
    </S.Container>
  );
}
