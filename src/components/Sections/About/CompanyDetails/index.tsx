import NextLink from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';
import * as C from '@chakra-ui/react';

export function CompanyDetails() {
  const router = useRouter();

  function handleChange(e) {
    router.push(`/${e.target.value}`);
  }

  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentTitle>
          <C.Text as="h2">Institucional</C.Text>
        </S.ContentTitle>

        <S.AboutGroup>
          <S.ContentAside>
            <S.List>
              <NextLink href={'/institucional'}>
                <C.Link>
                  <S.ListItem>Sobre a ANQM</S.ListItem>
                </C.Link>
              </NextLink>

              <NextLink href={'/institucional/regulamento'}>
                <C.Link>
                  <S.ListItem>Regulamentos</S.ListItem>
                </C.Link>
              </NextLink>
            </S.List>
          </S.ContentAside>

          <S.ContentSelect>
            <S.Select
              _focus={{ boxShadow: 'none' }}
              size="lg"
              onChange={handleChange}
            >
              <option value="/institucional">Sobre a ANQM</option>
              <option value="/institucional/regulamento">Regulamentos</option>
            </S.Select>
          </S.ContentSelect>

          <S.ContentInformations>
            <C.Text as="h1">Sobre a ANQM</C.Text>

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
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
              <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </C.Text>
          </S.ContentInformations>
        </S.AboutGroup>
      </S.Wrapper>
    </S.Container>
  );
}
