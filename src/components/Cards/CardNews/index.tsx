import * as S from './styles';
import * as C from '@chakra-ui/react';

import { DataNewsProps } from '~/interfaces/news';
interface CardProps {
  data?: DataNewsProps;
}

export function CardNews({ data }: CardProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentImage>
          <C.Image
            src={data.content_files[0].file_url}
            alt={data.title}
            fallbackSrc="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/8029/image-not-found.jpg"
          />
        </S.ContentImage>

        <S.ContentDescription>
          <C.Text as="span">{data.date}</C.Text>

          <C.Text as="h2" isTruncated noOfLines={[5, 5, 5, 3]}>
            {data.title}
          </C.Text>
        </S.ContentDescription>
      </S.Wrapper>
    </S.Container>
  );
}
