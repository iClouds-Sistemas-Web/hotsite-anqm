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
          <NextLink href={data.slug}>
            <C.Link>
              <C.Image
                src={data.cover.src}
                alt={data.cover.alt}
                fallbackSrc="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/8029/image-not-found.jpg"
              />
            </C.Link>
          </NextLink>
        </S.ContentImage>

        <S.ContentDescription>
          <NextLink href={data.slug}>
            <C.Link style={{ textDecoration: 'none' }}>
              <C.Text as="span">{data.date}</C.Text>

              <C.Text as="h2" isTruncated noOfLines={[5, 5, 5, 3]}>
                {data.title}
              </C.Text>
            </C.Link>
          </NextLink>
        </S.ContentDescription>
      </S.Wrapper>
    </S.Container>
  );
}
