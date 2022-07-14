import type { GetStaticProps, NextPage } from 'next';

import { Nav, News, Footer, Sponsors, NewsList } from '~/components';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/noticias';

import { BiSearchAlt2 } from 'react-icons/bi';

import { getRecentNews } from '~/services/functions/getRecentNews';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

const AllNews: NextPage = ({ advertisement, recentNews }: pagesDataProps) => {
  return (
    <S.Container>
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
  const advertisement = await getAdvertisement();

  return {
    props: {
      recentNews: recentNews ? recentNews : [],
      advertisement: advertisement ? advertisement : [],
    },
    revalidate: 60 * 30,
  };
};
