import { NextPage } from 'next';

import { Nav, Footer, Renovation } from '~/components';

import * as S from '~/styles/pages/associar';

const Associate: NextPage = () => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <Renovation />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Associate;
