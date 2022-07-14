import type { GetServerSideProps, NextPage } from 'next';

import {
  Nav,
  Footer,
  Sponsors,
  NewsSection,
  NewsDescription,
} from '~/components';
import { getNews } from '~/services/functions/getNews';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { HomeDataProps } from '~/interfaces/homeDataProps';

import * as S from '~/styles/pages/noticias/[slug]';

const NewsDetails: NextPage = ({ advertisement, news }: HomeDataProps) => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <NewsDescription data={news} />
        <NewsSection data={news} amount_of_news={4} />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default NewsDetails;

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getNews();
  const advertisement = await getAdvertisement();

  return {
    props: {
      news: news ? news : [],
      advertisement: advertisement ? advertisement : [],
    },
  };
};
