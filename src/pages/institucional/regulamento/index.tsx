import { NextSeo } from 'next-seo';
import { GetStaticProps, NextPage } from 'next';

import { Nav, Footer, Sponsors, CompanyDetailsRegulation } from '~/components';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

import * as S from '~/styles/pages/sobre';

const Regulation: NextPage = ({ advertisement }: pagesDataProps) => {
  return (
    <S.Container>
      <NextSeo
        title="ANQM | Institucional"
        description="Conheça mais sobre a ANQM."
      />
      <Nav />
      <S.Wrapper>
        <CompanyDetailsRegulation />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Regulation;

export const getStaticProps: GetStaticProps = async () => {
  const advertisement = await getAdvertisement();

  return {
    props: {
      advertisement: advertisement ? advertisement : [],
    },
    revalidate: 60 * 30,
  };
};
