import * as S from './styles';
import * as C from '@chakra-ui/react';

export function NewsList() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.List>
          <S.ListItem>
            <C.Text as="p">00 de janeiro de 0000</C.Text>
            <C.Text as="p" isTruncated noOfLines={[3, 3, 1]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the ...Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the ...
            </C.Text>
          </S.ListItem>

          <S.ListItem>
            <C.Text as="p">00 de janeiro de 0000</C.Text>
            <C.Text as="p" isTruncated noOfLines={[3, 3, 1]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the ...Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the ...
            </C.Text>
          </S.ListItem>

          <S.ListItem>
            <C.Text as="p">00 de janeiro de 0000</C.Text>
            <C.Text as="p" isTruncated noOfLines={[3, 3, 1]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the ...Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the ...
            </C.Text>
          </S.ListItem>
        </S.List>
      </S.Wrapper>
    </S.Container>
  );
}
