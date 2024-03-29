import BR from 'date-fns/locale/pt-BR';
import { format, Locale } from 'date-fns';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { NewsContentProps } from '~/interfaces/news';

export function NewsDescription({ data }: NewsContentProps) {
  const date = data?.date
    ? format(new Date(data?.date), "dd 'de' MMMM 'de' yyyy", {
        locale: BR as unknown as Locale,
      })
    : '';

  if (!data) {
    return <></>;
  }

  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentNewsHeader>
          <C.Text as="h1">{data?.title}</C.Text>

          <C.Text as="span">{date}</C.Text>

          <C.Text as="h2">{data?.resume}</C.Text>
        </S.ContentNewsHeader>

        <S.ContentImage>
          <C.Image
            src={data?.content_files[0]?.file_url}
            alt={data?.title}
            fallbackSrc="/images/image-not-found.jpg"
          />
        </S.ContentImage>

        <S.ContentDescription
          dangerouslySetInnerHTML={{ __html: String(data.text) }}
        />
      </S.Wrapper>
    </S.Container>
  );
}
