import type { NextPage } from 'next';

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

const Search: NextPage = () => {
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

      <Sponsors />
      <Footer />
    </S.Container>
  );
};

export default Search;
