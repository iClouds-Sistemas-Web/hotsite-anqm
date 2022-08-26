import { NextSeo } from 'next-seo';
import { GetStaticProps, NextPage } from 'next';

import { Nav, Footer, Sponsors, CompanyDetailsRegulation } from '~/components';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

import * as S from '~/styles/pages/sobre';
import { getInstitutional } from '~/services/functions/getInstitutional';

const Regulation: NextPage = ({
  advertisement,
  institutional,
}: pagesDataProps) => {
  return (
    <S.Container>
      <NextSeo
        title="ANQM | Institucional"
        description="Conheça mais sobre a ANQM."
      />
      <Nav />
      <S.Wrapper>
        <CompanyDetailsRegulation data={institutional} />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Regulation;

export const getStaticProps: GetStaticProps = async () => {
  const advertisement = await getAdvertisement();
  const institutional = await getInstitutional(2);

  return {
    props: {
      institutional: institutional ? institutional : [],
      advertisement: advertisement ? advertisement : [],
    },
    revalidate: 60 * 30,
  };
};
