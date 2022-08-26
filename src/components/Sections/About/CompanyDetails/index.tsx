import NextLink from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { InstitutionalProps } from '~/interfaces/institutional';

export function CompanyDetails({ data }: InstitutionalProps) {
  const description = data.text;

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
            <C.Text as="h1">{data.title}</C.Text>

            <C.Flex
              className="description"
              dangerouslySetInnerHTML={{ __html: String(description) }}
            />
          </S.ContentInformations>
        </S.AboutGroup>
      </S.Wrapper>
    </S.Container>
  );
}
