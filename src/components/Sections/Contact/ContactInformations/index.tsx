import * as S from './styles';
import * as C from '@chakra-ui/react';

export function ContactInformations() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Contate-nos</C.Text>
        </S.ContentTitle>

        <S.InformationsGroup>
          <S.ContentInformations>
            <S.ContentAddress>
              <C.Text as="h3">ENDEREÇO</C.Text>
              <C.Text as="p">Rod. Gov. Mário Covas, 111-179</C.Text>
              <C.Text as="p">
                Parque de Exposições Parnamirim - RN, 59150-000
              </C.Text>
            </S.ContentAddress>

            <S.ContentContactDescription>
              <C.Text as="h3">DESCRIÇÃO DO CONTATO</C.Text>
              <S.ContactGroup>
                <S.ContentIcon>
                  <C.Image src="images/svg/icon-telephone.svg" alt="" />
                </S.ContentIcon>
                <C.Text as="p">(99)99999-9999</C.Text>
              </S.ContactGroup>

              <S.ContactGroup>
                <S.ContentIcon>
                  <C.Image src="images/svg/icon-email.svg" alt="" />
                </S.ContentIcon>
                <C.Text as="p">email@gmail.com</C.Text>
              </S.ContactGroup>
            </S.ContentContactDescription>

            <S.ContentContactDescription>
              <C.Text as="h3">DESCRIÇÃO DO CONTATO</C.Text>
              <S.ContactGroup>
                <S.ContentIcon>
                  <C.Image src="images/svg/icon-telephone.svg" alt="" />
                </S.ContentIcon>
                <C.Text as="p">(99)99999-9999</C.Text>
              </S.ContactGroup>

              <S.ContactGroup>
                <S.ContentIcon>
                  <C.Image src="images/svg/icon-email.svg" alt="" />
                </S.ContentIcon>
                <C.Text as="p">email@gmail.com</C.Text>
              </S.ContactGroup>
            </S.ContentContactDescription>
          </S.ContentInformations>

          <S.ContentMap>
            {/* <C.Image src="/images/png/map-contact.png" alt="" /> */}
          </S.ContentMap>
        </S.InformationsGroup>
      </S.Wrapper>
    </S.Container>
  );
}
