import type { GetStaticProps, NextPage } from 'next';

import { getNews } from '~/services/functions/getNews';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

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

const Home: NextPage = ({ advertisement, news }: HomeDataProps) => {
  return (
    <S.Container>
      <Nav styletype="primary" />
      <S.Wrapper>
        <Header />
        <Channels />
        <News data={news} amount_of_news={4} />
        <Events />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const news = await getNews();
  const advertisement = await getAdvertisement();

  return {
    props: {
      news,
      advertisement,
    },
    revalidate: 60 * 30,
  };
};
