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
          <C.Image
            src="images/svg/arrow-left-pagination.svg"
            alt="Seta para esquerda de cor cinza"
          />
          <C.Image src="images/svg/ellipse-1-pagination.svg" alt="" />
          <C.Image src="images/svg/ellipse-2-pagination.svg" alt="" />
          <C.Image src="images/svg/ellipse-3-pagination.svg" alt="" />
          <C.Image src="images/svg/ellipse-5-pagination.svg" alt="" />
          <C.Image
            src="images/svg/arrow-right-pagination.svg"
            alt="Seta para direita de cor cinza"
          />
        </S.ContentPagination>
      </S.Wrapper>
    </S.Container>
  );
}
