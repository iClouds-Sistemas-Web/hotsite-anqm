import NextLink from 'next/link';

import { CardNews } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { NewsProps } from '~/interfaces/news';

export function News({ data, children, amount_of_news }: NewsProps) {
  if (!data) {
    return <></>;
  }

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
              src={data.news[0].cover.file}
              fallbackSrc="/images/image-not-found.jpg"
            />
          </S.ContentImage>

          <S.ContentDescription>
            <NextLink href={data[0].slug}>
              <C.Link style={{ textDecoration: 'none' }}>
                <C.Text as="span">{data[0].date}</C.Text>

                <C.Text as="h2" isTruncated noOfLines={[3, 3, 5]}>
                  {data[0].title}
                </C.Text>

                <C.Text as="p" isTruncated noOfLines={[2, 2, 5]}>
                  {data[0].resume}
                </C.Text>
              </C.Link>
            </NextLink>
          </S.ContentDescription>
        </S.ContentTopNews>

        <S.ContentMoreNews as="section">
          {data
            .map((item) => <CardNews key={item.id} data={item} />)
            .splice(1, amount_of_news)}
        </S.ContentMoreNews>
      </S.Wrapper>
    </S.Container>
  );
}
