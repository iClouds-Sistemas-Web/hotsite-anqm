import type { GetStaticProps, NextPage } from 'next';

import { getRecentNews } from '~/services/functions/getRecentNews';
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

import { pagesDataProps } from '~/interfaces/pagesDataProps';

const Home: NextPage = ({ advertisement, recentNews }: pagesDataProps) => {
  return (
    <S.Container>
      <Nav styletype="primary" />
      <S.Wrapper>
        <Header />
        <Channels />
        <News data={recentNews} amount_of_news={4} />
        <Events />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const recentNews = await getRecentNews();
  const advertisement = await getAdvertisement();

  return {
    props: {
      recentNews: recentNews ? recentNews : [],
      advertisement: advertisement ? advertisement : [],
    },
    revalidate: 60 * 30,
  };
};
