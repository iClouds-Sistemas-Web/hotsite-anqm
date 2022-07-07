import { CardNews } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { NewsProps } from '~/interfaces/news';

export function News({ data, children, amount_of_news }: NewsProps) {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Últimas Notícias</C.Text>

          {children && <S.ContentSearchInput>{children}</S.ContentSearchInput>}
        </S.ContentTitle>

        <S.ContentTopNews as="section">
          <S.ContentImage>
            <C.Image
              src=""
              fallbackSrc="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/8029/image-not-found.jpg"
            />
          </S.ContentImage>

          <S.ContentDescription>
            <C.Text as="span">span</C.Text>

            <C.Text as="h2" isTruncated noOfLines={[3, 3, 5]}>
              a
            </C.Text>

            <C.Text as="p" isTruncated noOfLines={[2, 2, 5]}>
              b
            </C.Text>
          </S.ContentDescription>
        </S.ContentTopNews>

        {/* <S.ContentMoreNews as="section">
          {data.news
            .map((item) => <CardNews key={item.id} data={item} />)
            .splice(1, amount_of_news)}
        </S.ContentMoreNews> */}
      </S.Wrapper>
    </S.Container>
  );
}
