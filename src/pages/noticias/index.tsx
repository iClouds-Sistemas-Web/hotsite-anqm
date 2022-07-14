import type { GetStaticProps, NextPage } from 'next';

import { Nav, News, Footer, Sponsors, NewsList } from '~/components';

import * as C from '@chakra-ui/react';
import * as S from '~/styles/pages/noticias';

import { BiSearchAlt2 } from 'react-icons/bi';

import { HomeDataProps } from '~/interfaces/homeDataProps';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

const AllNews: NextPage = ({ advertisement }: HomeDataProps) => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <News amount_of_news={8}>
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
  const advertisement = await getAdvertisement();

  return {
    props: {
      advertisement,
    },
    revalidate: 60 * 30,
  };
};
