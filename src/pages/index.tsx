import type { GetStaticProps, NextPage } from 'next';

import {
  Nav,
  News,
  Events,
  Footer,
  Header,
  Sponsors,
  Channels,
} from '~/components';

import * as S from '~/styles/pages';
import { HomeDataProps } from '~/interfaces/homeDataProps';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

const Home: NextPage = ({ advertisement }: HomeDataProps) => {
  console.log(advertisement);

  return (
    <S.Container>
      <Nav styletype="primary" />
      <S.Wrapper>
        <Header />
        <Channels />
        <News amount_of_news={4} />
        <Events />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const advertisement = await getAdvertisement();

  return {
    props: {
      advertisement,
    },
    revalidate: 60 * 30,
  };
};
