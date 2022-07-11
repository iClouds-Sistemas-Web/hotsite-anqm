import * as S from './styles';
import * as C from '@chakra-ui/react';

export function NoSearch() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentText>
          <C.Text as="h1">
            Não encontramos nenhum resultado para sua busca.
          </C.Text>
          <C.Text as="p">
            Por favor verifique o termo pesquisado e tente novamente.
          </C.Text>

          <S.ContentImage>
            <C.Image src="/images/svg/icon-search.svg" alt=""></C.Image>
          </S.ContentImage>
          <S.ContentImage />
        </S.ContentText>
      </S.Wrapper>
    </S.Container>
  );
}
