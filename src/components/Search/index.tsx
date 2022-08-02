import { ReactNode, useContext } from 'react';

import * as S from './styles';
import * as C from '@chakra-ui/react';
import { ApplicationContext } from '~/hooks/Application';

interface SearchProps {
  children?: ReactNode;
  totalRegisters: string;
}

export function Search({ children, totalRegisters }: SearchProps) {
  const { search } = useContext(ApplicationContext);

  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Notícias</C.Text>

          {children && <S.ContentSearchInput>{children}</S.ContentSearchInput>}
        </S.ContentTitle>
        <S.ContentPhrase as="span">
          <p>
            <strong>&quot;{search}&quot;</strong> - {totalRegisters} resultados
          </p>
        </S.ContentPhrase>
      </S.Wrapper>
    </S.Container>
  );
}
