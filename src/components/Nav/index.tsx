import { Toggle } from '~/components';

import * as S from './styles';

export function Nav() {
  return (
    <S.Container as="nav">
      <S.ContentToggle>
        <Toggle />
      </S.ContentToggle>

      <S.Wrapper>
        <S.ContentLogo>LOGO</S.ContentLogo>

        <S.ContentNavigation />

        <S.ContentSocialLinks />
      </S.Wrapper>
    </S.Container>
  );
}
