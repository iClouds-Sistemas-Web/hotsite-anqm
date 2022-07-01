import { CardNews } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { NewsProps } from '~/interfaces/news';

export function NewsSection({ data, amount_of_news }: NewsProps) {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Outras Notícias</C.Text>
        </S.ContentTitle>

        <S.ContentMoreNews>
          {data.news
            .map((item) => <CardNews key={item.id} data={item} />)
            .splice(0, amount_of_news)}
        </S.ContentMoreNews>
      </S.Wrapper>
    </S.Container>
  );
}
