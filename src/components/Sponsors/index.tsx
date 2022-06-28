import { CardSponsors } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Sponsors() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Title Section</C.Text>
        </S.ContentTitle>

        <S.ContentSponsors>
          <CardSponsors />
          <CardSponsors />
          <CardSponsors />
          <CardSponsors />
          <CardSponsors />
        </S.ContentSponsors>
      </S.Wrapper>
    </S.Container>
  );
}
