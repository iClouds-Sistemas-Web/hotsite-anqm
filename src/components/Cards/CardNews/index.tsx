import NextLink from 'next/link';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { News } from '~/interfaces/news';

interface CardProps {
  data?: News;
}

export function CardNews({ data }: CardProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentImage>
          <NextLink href={data[0]?.slug ? data[0].slug : '#'}>
            <C.Link>
              <C.Image
                alt={data?.title}
                src={data?.cover.src}
                fallbackSrc="/images/image-not-found.jpg"
              />
            </C.Link>
          </NextLink>
        </S.ContentImage>

        <S.ContentDescription>
          <NextLink href={data[0]?.slug ? data[0].slug : '#'}>
            <C.Link style={{ textDecoration: 'none' }}>
              <C.Text as="span">{data?.date}</C.Text>

              <C.Text as="h2" isTruncated noOfLines={[5, 5, 5, 3]}>
                {data?.title}
              </C.Text>
            </C.Link>
          </NextLink>
        </S.ContentDescription>
      </S.Wrapper>
    </S.Container>
  );
}
