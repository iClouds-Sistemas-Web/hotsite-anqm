import type { GetServerSideProps, NextPage } from 'next';

import { Nav, News, Footer, Sponsors, NewsList } from '~/components';

import * as S from '~/styles/pages/noticias';

import { BiSearchAlt2 } from 'react-icons/bi';

import { getNews } from '~/services/functions/getNews';

const AllNews: NextPage = (news) => {
  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <News data={news} amount_of_news={8}>
          <S.InputGroup>
            <S.InputLeftElement pointerEvents="none">
              <BiSearchAlt2 />
            </S.InputLeftElement>
            <S.Input
              type="text"
              placeholder="Pesquisar..."
              _focus={{ boxShadow: 'none' }}
            />
          </S.InputGroup>
        </News>

        <NewsList />
        <Sponsors />
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default AllNews;

export const getServerSideProps: GetServerSideProps = async () => {
  const news = await getNews();

  return {
    props: { news },
  };
};
