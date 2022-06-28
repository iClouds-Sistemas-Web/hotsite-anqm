import * as S from './styles';
import * as C from '@chakra-ui/react';

export function CompanyDetails() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Title Section</C.Text>
        </S.ContentTitle>

        <S.AboutGroup>
          <S.ContentAside>
            <S.List>
              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>

              <S.ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </S.ListItem>
            </S.List>
          </S.ContentAside>

          <S.ContentSelect>
            <S.Select _focus={{ boxShadow: 'none' }} size="lg">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </S.Select>
          </S.ContentSelect>

          <S.ContentInformations>
            <C.Text as="h1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </C.Text>

            <C.Text as="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. <br />
              <br /> Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. <br />
              <br /> Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.{' '}
            </C.Text>
          </S.ContentInformations>
        </S.AboutGroup>
      </S.Wrapper>
    </S.Container>
  );
}
