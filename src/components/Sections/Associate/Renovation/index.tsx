import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Renovation() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Assoyarncie-se</C.Text>
        </S.ContentTitle>

        <S.ContentDescription>
          <C.Text as="p">
            Se você ainda não é sócio, faça seu cadastro! Caso já seja sócio,
            vem renovar sua sociedade! Venha colaborar para o fortalecimento da
            associação do cavalo Quarto de Milha e tenha varias vantagens se
            tornando sócio.
          </C.Text>
        </S.ContentDescription>

        <S.ContentButton>
          <S.Button>Continuar</S.Button>
        </S.ContentButton>
      </S.Wrapper>
    </S.Container>
  );
}
