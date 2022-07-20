import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import {
  Nav,
  Footer,
  Sponsors,
  NewsSection,
  NewsDescription,
} from '~/components';
import { getNews, getNewsContent } from '~/services/functions/getNews';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

import * as S from '~/styles/pages/noticias/[slug]';

const NewsDetails: NextPage = ({
  advertisement,
  news,
  newsContent,
}: pagesDataProps) => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <NewsDescription data={newsContent} />
        <NewsSection data={news} amount_of_news={4} />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default NewsDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const newsContentId = String(params.slug).split('-');

  const newsContentIdFormatted = newsContentId[newsContentId.length - 1];

  const news = await getNews();
  const advertisement = await getAdvertisement();
  const newsContent = await getNewsContent(newsContentIdFormatted);

  return {
    props: {
      news: news ? news : [],
      newsContent: newsContent ? newsContent : [],
      advertisement: advertisement ? advertisement : [],
    },
  };
};
