import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Footer() {
  return (
    <S.Container as="footer">
      <S.Wrapper>
        <S.ContentLogoMobile>LOGO</S.ContentLogoMobile>

        <S.ContentContact>
          <C.Text as="p">(00) 99999-9999 | (00) 99999-9999</C.Text>
          <C.Text as="p">email@gmail.com</C.Text>
        </S.ContentContact>

        <S.ContentLogo>LOGO</S.ContentLogo>

        <S.ContentSocialLinks></S.ContentSocialLinks>
      </S.Wrapper>

      <S.ContentNavigation />

      <S.ContentCopyright />
    </S.Container>
  );
}
