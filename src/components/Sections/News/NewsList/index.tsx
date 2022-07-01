import * as S from './styles';
import * as C from '@chakra-ui/react';

export function NewsList() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.List>
          <S.ListItem>
            <C.Text as="span">16 de outubro de 2019</C.Text>
            <C.Text as="p" isTruncated noOfLines={[3, 3, 1]}>
              ANQM homenageia seus ex-presidentes na festa de 30 anos da
              Associação
            </C.Text>
          </S.ListItem>

          <S.ListItem>
            <C.Text as="span">16 de outubro de 2019</C.Text>
            <C.Text as="p" isTruncated noOfLines={[3, 3, 1]}>
              ANQM homenageia seus ex-presidentes na festa de 30 anos da
              Associação
            </C.Text>
          </S.ListItem>

          <S.ListItem>
            <C.Text as="span">16 de outubro de 2019</C.Text>
            <C.Text as="p" isTruncated noOfLines={[3, 3, 1]}>
              ANQM homenageia seus ex-presidentes na festa de 30 anos da
              Associação
            </C.Text>
          </S.ListItem>
        </S.List>
        <S.ContentPagination>
          <C.Image src="images/svg/chevron-left-pagination.svg" alt="" />
          <C.Image src="images/svg/ellipse-4-pagination.svg" alt="" />
          <C.Image src="images/svg/ellipse-5-pagination.svg" alt="" />
          <C.Image src="images/svg/ellipse-6-pagination.svg" alt="" />
          <C.Image src="images/svg/ellipse-7-pagination.svg" alt="" />
          <C.Image src="images/svg/chevron-right-pagination.svg" alt="" />
        </S.ContentPagination>
      </S.Wrapper>
    </S.Container>
  );
}
