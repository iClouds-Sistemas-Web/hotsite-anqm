import * as S from './styles';
import * as C from '@chakra-ui/react';

export function ContactInformations() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Title Section</C.Text>
        </S.ContentTitle>

        <S.InformationsGroup>
          <S.ContentInformations>
            <S.ContentAddress>
              <C.Text as="h3">ENDEREÇO</C.Text>
              <C.Text as="p">Rua, nº 8565</C.Text>
              <C.Text as="p"> 00000-000 - Cidade/Estado</C.Text>
            </S.ContentAddress>

            <S.ContentContactDescription>
              <C.Text as="h3">DESCRIÇÃO DO CONTATO</C.Text>
              <S.ContactGroup>
                <S.ContentIcon />
                <C.Text as="p">(99)99999-9999</C.Text>
              </S.ContactGroup>

              <S.ContactGroup>
                <S.ContentIcon />
                <C.Text as="p">email@gmail.com</C.Text>
              </S.ContactGroup>
            </S.ContentContactDescription>

            <S.ContentContactDescription>
              <C.Text as="h3">DESCRIÇÃO DO CONTATO</C.Text>
              <S.ContactGroup>
                <S.ContentIcon />
                <C.Text as="p">(99)99999-9999</C.Text>
              </S.ContactGroup>

              <S.ContactGroup>
                <S.ContentIcon />
                <C.Text as="p">email@gmail.com</C.Text>
              </S.ContactGroup>
            </S.ContentContactDescription>
          </S.ContentInformations>

          <S.ContentMap />
        </S.InformationsGroup>
      </S.Wrapper>
    </S.Container>
  );
}
