import { NextSeo } from 'next-seo';
import type { GetStaticProps, NextPage } from 'next';

import { Nav, News, Footer, Sponsors, NewsList } from '~/components';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/noticias';

import { BiSearchAlt2 } from 'react-icons/bi';

import { getRecentNews } from '~/services/functions/getRecentNews';
import { getAdvertisement } from '~/services/functions/getAdvertisement';
import { getNewsPagination } from '~/services/functions/getNewsPagination';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

const AllNews: NextPage = ({ advertisement, recentNews }: pagesDataProps) => {
  return (
    <S.Container>
      <NextSeo
        title="ANQM | Notícias"
        description="Acompanhe as noticias da ANQM. Fique por dentro de todas as nossas novidades."
      />
      <Nav />
      <S.Wrapper>
        <News data={recentNews} amount_of_news={8}>
          <S.ContentTitle>
            <C.Text as="span">Notícias</C.Text>
          </S.ContentTitle>
          <S.InputGroup>
            <S.InputLeftElement pointerEvents="none">
              <BiSearchAlt2 />
            </S.InputLeftElement>
            <S.Input
              type="text"
              placeholder="Buscar notícia"
              _focus={{ boxShadow: 'none' }}
            />
          </S.InputGroup>
        </News>
        <NewsList />
        <Sponsors data={advertisement} />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default AllNews;

export const getStaticProps: GetStaticProps = async () => {
  const recentNews = await getRecentNews();
  const paginationNews = await getNewsPagination();
  const advertisement = await getAdvertisement();

  return {
    props: {
      recentNews: recentNews ? recentNews : [],
      advertisement: advertisement ? advertisement : [],
      paginationNews: paginationNews ? paginationNews : [],
    },
    revalidate: 60 * 30,
  };
};
