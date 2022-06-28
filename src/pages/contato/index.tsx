import type { NextPage } from 'next';

import { Nav, Footer, ContactInformations } from '~/components';

import * as S from '~/styles/pages/contato';

const Contact: NextPage = () => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <ContactInformations />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Contact;
