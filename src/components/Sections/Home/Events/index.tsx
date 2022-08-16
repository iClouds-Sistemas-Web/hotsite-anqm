import { Carousel } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { EventsProps } from '~/interfaces/events';

export function Events({ data }: EventsProps) {
  return (
    <S.Container as="section">
      <C.Flex id="events" top="-8rem" position="absolute" />
      <S.Wrapper>
        <S.ContentEQuesterImage>
          <a
            href="https://www.equester.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <C.Image
              src="/images/svg/tag-eQuester.svg"
              alt="Etiqueta com logo eQuester, fundo amarelo, texto cor açaí escrito baixe o app "
            />
          </a>
        </S.ContentEQuesterImage>

        <S.ContentTitle>
          <C.Text as="h2">Agenda de Eventos</C.Text>
        </S.ContentTitle>

        <Carousel>
          {data.map((item) => (
            <div className="flicking-panel" key={item.id}>
              <C.Image src={item.banner_file.src_medium} alt={item.title} />
            </div>
          ))}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  );
}
