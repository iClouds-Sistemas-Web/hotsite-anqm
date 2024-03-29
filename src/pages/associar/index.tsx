import { NextSeo } from 'next-seo';
import { GetServerSideProps, NextPage } from 'next';

import { Nav, Footer, Renovation } from '~/components';
import { pagesDataProps } from '~/interfaces/pagesDataProps';
import { getInstitutional } from '~/services/functions/getInstitutional';

import * as S from '~/styles/pages/associar';

const Associate: NextPage = ({ institutional }: pagesDataProps) => {
  return (
    <S.Container>
      <NextSeo
        title="ANQM | Associe-se"
        description="Faça parte dos nossos associados e contribua para o fortalecimento dos nossos objetivos."
      />
      <Nav />
      <S.Wrapper>
        <Renovation data={institutional} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Associate;

export const getServerSideProps: GetServerSideProps = async () => {
  const institutional = await getInstitutional(3);

  return {
    props: {
      institutional: institutional ? institutional : [],
    },
  };
};
