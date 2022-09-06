import Router from 'next/router';
import { useContext } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { BiSearchAlt2 } from 'react-icons/bi';

import { ApplicationContext } from '~/hooks/Application';

import {
  Nav,
  Footer,
  Sponsors,
  NewsList,
  Search as SearchComponent,
  NoSearch,
} from '~/components';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import * as S from '~/styles/pages/buscar';

import { pagesDataProps } from '~/interfaces/pagesDataProps';

const Search: NextPage = ({ advertisement }: pagesDataProps) => {
  const { data, search, setSearch } = useContext(ApplicationContext);

  function handleNewSearch() {
    Router.push(`/noticias/buscar?search=${search.replace(' ', '-')}`);
  }

  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <SearchComponent>
          <S.InputGroup>
            <S.Input
              type="text"
              placeholder="Pesquisar..."
              _focus={{ boxShadow: 'none' }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <S.InputRightElement>
              <button onClick={handleNewSearch}>
                <BiSearchAlt2 />
              </button>
            </S.InputRightElement>
          </S.InputGroup>
        </SearchComponent>
      </S.Wrapper>

      {data.length > 0 ? <NewsList /> : <NoSearch />}

      <Sponsors data={advertisement} />
      <Footer />
    </S.Container>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
  const advertisement = await getAdvertisement();

  return {
    props: {
      advertisement: advertisement ? advertisement : [],
    },
  };
};
