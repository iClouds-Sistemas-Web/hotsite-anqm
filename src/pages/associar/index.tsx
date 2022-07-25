import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Nav, Footer, Renovation } from '~/components';

import * as S from '~/styles/pages/associar';

const Associate: NextPage = () => {
  return (
    <S.Container>
      <NextSeo
        title="ANQM | Associe-se"
        description="Faça parte dos nossos associados e contribua para o fortalecimento dos nossos objetivos."
      />
      <Nav />
      <S.Wrapper>
        <Renovation />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Associate;
