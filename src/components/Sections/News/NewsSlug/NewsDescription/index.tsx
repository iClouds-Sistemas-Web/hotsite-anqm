import * as S from './styles';
import * as C from '@chakra-ui/react';

export function NewsDescription() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentNewsHeader>
          <C.Text as="h1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </C.Text>

          <C.Text as="span">00 de janeiro de 0000</C.Text>

          <C.Text as="h2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </C.Text>
        </S.ContentNewsHeader>

        <S.ContentImage>
          <C.Image src="/images/png/image.png" />
        </S.ContentImage>

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
            of the printing and typesetting industry. <br />
            <br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.{' '}
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </C.Text>
        </S.ContentDescription>
      </S.Wrapper>
    </S.Container>
  );
}
