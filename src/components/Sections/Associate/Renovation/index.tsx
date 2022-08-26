import * as S from './styles';
import * as C from '@chakra-ui/react';

import { InstitutionalProps } from '~/interfaces/institutional';

export function Renovation({ data }: InstitutionalProps) {
  const description = data.text;

  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Associe-se</C.Text>
        </S.ContentTitle>

        <S.ContentDescription>
          <C.Flex
            className="description"
            dangerouslySetInnerHTML={{ __html: String(description) }}
          />
        </S.ContentDescription>

        <S.ContentButton>
          <S.Button>Continuar</S.Button>
        </S.ContentButton>
      </S.Wrapper>
    </S.Container>
  );
}
