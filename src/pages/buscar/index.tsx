import type { GetStaticProps, NextPage } from 'next';

import {
  Nav,
  Footer,
  Sponsors,
  NewsList,
  Search as SearchComponent,
  NoSearch,
} from '~/components';

import * as S from '~/styles/pages/buscar';

import { BiSearchAlt2 } from 'react-icons/bi';
import { getAdvertisement } from '~/services/functions/getAdvertisement';

import { HomeDataProps } from '~/interfaces/homeDataProps';

const Search: NextPage = ({ advertisement }: HomeDataProps) => {
  const foundPhrase = false;

  return (
    <S.Container>
      <Nav />
      <S.Wrapper>
        <SearchComponent>
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
        </SearchComponent>
      </S.Wrapper>

      {foundPhrase ? <NewsList /> : <NoSearch />}

      <Sponsors data={advertisement} />
      <Footer />
    </S.Container>
  );
};

export default Search;

export const getStaticProps: GetStaticProps = async () => {
  const advertisement = await getAdvertisement();

  return {
    props: {
      advertisement: advertisement ? advertisement : [],
    },
    revalidate: 60 * 30,
  };
};
