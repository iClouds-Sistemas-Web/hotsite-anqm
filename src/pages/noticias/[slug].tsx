import { NextSeo } from 'next-seo';
import type { GetServerSideProps, NextPage } from 'next';

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
      <NextSeo title={newsContent.title} description={newsContent.resume} />
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
