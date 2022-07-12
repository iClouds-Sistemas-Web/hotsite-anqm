import { CardSponsors } from '~/components';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export interface SponsorsProps {
  data: [
    {
      id: number;
      title: string;
      file_url: string;
    }
  ];
}

export function Sponsors({ data }: SponsorsProps) {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Nossos Parceiros</C.Text>
        </S.ContentTitle>

        <S.ContentSponsors>
          <S.ContentCardEQuester>
            <C.Image
              src="/images/svg/logo-equester-sponsors.svg"
              alt="Logo eQuester cor açaí, com fundo branco"
            />
          </S.ContentCardEQuester>
          {data.map((sponsor) => (
            <CardSponsors
              key={sponsor.id}
              alt={sponsor.title}
              src={sponsor.file_url}
            />
          ))}
        </S.ContentSponsors>
      </S.Wrapper>
    </S.Container>
  );
}
