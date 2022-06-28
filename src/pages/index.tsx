import type { GetServerSideProps, NextPage } from 'next';

import {
  Nav,
  News,
  Events,
  Footer,
  Header,
  Sponsors,
  Channels,
} from '~/components';

import { getNews } from '~/services/functions/getNews';

import * as S from '~/styles/pages';

const Home: NextPage = (news) => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <Header />
        <Channels />
        <News data={news} amount_of_news={4} />
        <Events />
        <Sponsors />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getNews();

  return {
    props: { news },
  };
};
