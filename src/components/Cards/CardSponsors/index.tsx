import * as S from './styles';
import * as C from '@chakra-ui/react';

interface CardSponsorsProps {
  alt: string;
  src: string;
}

export function CardSponsors({ alt, src }: CardSponsorsProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentImage>
          <C.Image src={src} alt={alt} />
        </S.ContentImage>
      </S.Wrapper>
    </S.Container>
  );
}
