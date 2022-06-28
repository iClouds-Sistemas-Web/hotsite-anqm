import type { GetServerSideProps, NextPage } from 'next';

import {
  Nav,
  Footer,
  Sponsors,
  NewsSection,
  NewsDescription,
} from '~/components';

import { getNews } from '~/services/functions/getNews';

import * as S from '~/styles/pages/noticias/[slug]';

const NewsDetails: NextPage = (news) => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <NewsDescription />
        <NewsSection data={news} amount_of_news={4} />
        <Sponsors />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default NewsDetails;

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getNews();

  return {
    props: { news },
  };
};
