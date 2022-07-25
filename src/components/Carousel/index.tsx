import { ReactNode } from 'react';

import Flicking from '@egjs/react-flicking';

import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';

interface CarouselProps {
  children?: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  return (
    <>
      {children ? (
        <Flicking
          align="prev"
          bound={true}
          circular={false}
          horizontal={true}
          circularFallback="bound"
          inputType={['touch', 'mouse']}
        >
          {children}
        </Flicking>
      ) : (
        <div>Nenhum carrossel encontrado!!</div>
      )}
    </>
  );
}
