import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Renovation() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Associe-se</C.Text>
        </S.ContentTitle>

        <S.ContentDescription>
          <C.Text as="p">
            Se você ainda não é sócio, faça seu cadastro! <br />
          </C.Text>
          <C.Text as="p">
            Caso já seja sócio, renove sua sociedade! <br />
            <br />
          </C.Text>
          <C.Text as="p">
            Venha colaborar para o fortalecimento da associação do cavalo Quarto
            de Milha e tenha várias vantagens se tornando sócio.
          </C.Text>
        </S.ContentDescription>

        <S.ContentButton>
          <S.Button>Continuar</S.Button>
        </S.ContentButton>
      </S.Wrapper>
    </S.Container>
  );
}
