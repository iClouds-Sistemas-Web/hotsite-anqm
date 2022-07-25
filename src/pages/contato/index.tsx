import { NextSeo } from 'next-seo';
import type { NextPage } from 'next';

import { Nav, Footer, ContactInformations } from '~/components';

import * as S from '~/styles/pages/contato';

const Contact: NextPage = () => {
  return (
    <S.Container>
      <NextSeo
        title="ANQM | Contato"
        description="Entre em contato conosco e tire aqui todas as suas dúvidas."
      />
      <Nav />
      <S.Wrapper>
        <ContactInformations />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Contact;
