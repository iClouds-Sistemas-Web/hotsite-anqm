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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4672139272!2d-35.267171384829766!3d-5.930142459987723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b257714f30b7d3%3A0x8b95b94a4134b515!2sRod.%20Gov.%20M%C3%A1rio%20Covas%2C%20111%20-%20Centro%2C%20Parnamirim%20-%20RN%2C%2059140-001!5e0!3m2!1spt-BR!2sbr!4v1658861709522!5m2!1spt-BR!2sbr"
              width="610px"
              height="340"
            ></iframe>
          </S.ContentMap>
        </S.InformationsGroup>
      </S.Wrapper>
    </S.Container>
  );
}
