import { ReactNode } from 'react';

import Flicking, { ViewportSlot } from '@egjs/react-flicking';

import { Pagination } from '@egjs/flicking-plugins';

import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';

import * as S from './styles';

interface CarouselProps {
  children?: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const plugins = [new Pagination({ type: 'bullet' })];

  return (
    <>
      {children ? (
        <Flicking
          align="prev"
          bound={true}
          circular={false}
          plugins={plugins}
          horizontal={true}
          circularFallback="bound"
          inputType={['touch', 'mouse']}
        >
          {children}
          <ViewportSlot>
            <S.Pagination className="flicking-pagination" />
          </ViewportSlot>
        </Flicking>
      ) : (
        <div>Nenhum carrossel encontrado!</div>
      )}
    </>
  );
}
