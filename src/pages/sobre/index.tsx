import { NextPage } from 'next';

import { Nav, Footer, Sponsors, CompanyDetails } from '~/components';

import * as S from '~/styles/pages/sobre';

const About: NextPage = () => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <CompanyDetails />
        <Sponsors />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default About;
