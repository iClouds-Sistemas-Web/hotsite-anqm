import { ReactNode } from 'react';

import * as S from './styles';
import * as C from '@chakra-ui/react';

interface SearchProps {
  children?: ReactNode;
}

export function Search({ children }: SearchProps) {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Notícias</C.Text>

          {children && <S.ContentSearchInput>{children}</S.ContentSearchInput>}
        </S.ContentTitle>
        <S.ContentPhrase as="span">
          <p>
            <strong>&quot;homenagem 30 anos&quot;</strong> - 30 resultados
          </p>
        </S.ContentPhrase>
      </S.Wrapper>
    </S.Container>
  );
}
