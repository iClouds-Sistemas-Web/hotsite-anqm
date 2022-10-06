import Router from 'next/router';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import type { GetServerSideProps, NextPage } from 'next';

import { Nav, News, Footer, Sponsors, NewsList } from '~/components';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/noticias';

import { BiSearchAlt2 } from 'react-icons/bi';

import { getRecentNews } from '~/services/functions/getRecentNews';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

const AllNews: NextPage = ({ advertisement, recentNews }: pagesDataProps) => {
  const [search, setSearch] = useState('');

  function handleNewSearch() {
    Router.push(`/noticias/buscar?search=${search.replace(' ', '-')}`);
  }

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
            <S.Input
              type="text"
              placeholder="Buscar título da notícia..."
              _focus={{ boxShadow: 'none' }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <S.InputRightElement>
              <button onClick={handleNewSearch}>
                <BiSearchAlt2 />
              </button>
            </S.InputRightElement>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const recentNews = await getRecentNews();
  const advertisement = await getAdvertisement();

  return {
    props: {
      recentNews: recentNews ? recentNews : [],
      advertisement: advertisement ? advertisement : [],
    },
  };
};
