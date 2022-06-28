import * as S from './styles';
import * as C from '@chakra-ui/react';

export function Renovation() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Title Section</C.Text>
        </S.ContentTitle>

        <S.ContentDescription>
          <C.Text as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </C.Text>
        </S.ContentDescription>

        <S.ContentButton>
          <S.Button>Button</S.Button>
        </S.ContentButton>
      </S.Wrapper>
    </S.Container>
  );
}
