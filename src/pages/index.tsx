import { NextSeo } from 'next-seo';
import type { GetStaticProps, NextPage } from 'next';

import { getEvents } from '~/services/functions/getEvents';
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

const Home: NextPage = ({
  advertisement,
  recentNews,
  events,
}: pagesDataProps) => {
  return (
    <S.Container>
      <NextSeo
        title="ANQM | Home"
        description="Associação Norteriograndense dos criadores do cavalo Quarto de Milha."
      />
      <Nav styletype="primary" />
      <S.Wrapper>
        <Header />
        <Channels />
        <News data={recentNews} amount_of_news={4} />
        <Events data={events} />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const events = await getEvents();
  const recentNews = await getRecentNews();
  const advertisement = await getAdvertisement();

  return {
    props: {
      events: events ? events : [],
      recentNews: recentNews ? recentNews : [],
      advertisement: advertisement ? advertisement : [],
    },
    revalidate: 60 * 30,
  };
};
