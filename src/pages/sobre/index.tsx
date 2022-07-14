import { GetStaticProps, NextPage } from 'next';

import { Nav, Footer, Sponsors, CompanyDetails } from '~/components';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

import * as S from '~/styles/pages/sobre';

const About: NextPage = ({ advertisement }: pagesDataProps) => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <CompanyDetails />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const advertisement = await getAdvertisement();

  return {
    props: {
      advertisement: advertisement ? advertisement : [],
    },
    revalidate: 60 * 30,
  };
};
