import { Carousel } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Events() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Section Title</C.Text>
        </S.ContentTitle>

        <Carousel>
          <S.ContentEvent className="flicking-panel">
            <C.Image src="/images/png/image.png" />
          </S.ContentEvent>

          <S.ContentEvent className="flicking-panel">
            <C.Image src="/images/png/image.png" />
          </S.ContentEvent>

          <S.ContentEvent className="flicking-panel">
            <C.Image src="/images/png/image.png" />
          </S.ContentEvent>

          <S.ContentEvent className="flicking-panel">
            <C.Image src="/images/png/image.png" />
          </S.ContentEvent>

          <S.ContentEvent className="flicking-panel">
            <C.Image src="/images/png/image.png" />
          </S.ContentEvent>
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
}
