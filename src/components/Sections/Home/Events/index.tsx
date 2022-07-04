import { Carousel } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Events() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentEQuesterImage>
          <C.Image
            src="/images/svg/tag-eQuester.svg"
            alt="Etiqueta com logo eQuester, fundo amarelo, texto cor açaí escrito baixe o app "
          />
        </S.ContentEQuesterImage>

        <S.ContentTitle>
          <C.Text as="h2">Agenda de Eventos</C.Text>
        </S.ContentTitle>

        <Carousel>
          <div className="flicking-panel">
            <C.Image src="/images/png/img-events.png" alt="Evento" />
          </div>

          <div className="flicking-panel">
            <C.Image src="/images/png/img-events.png" alt="Evento" />
          </div>

          <div className="flicking-panel">
            <C.Image src="/images/png/img-events.png" alt="Evento" />
          </div>

          <div className="flicking-panel">
            <C.Image src="/images/png/img-events.png" alt="Evento" />
          </div>

          <div className="flicking-panel">
            <C.Image src="/images/png/img-events.png" alt="Evento" />
          </div>
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
}
