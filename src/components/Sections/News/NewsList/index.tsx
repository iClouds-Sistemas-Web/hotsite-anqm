import NextLink from 'next/link';
import { useContext } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';

import BR from 'date-fns/locale/pt-BR';
import { format, Locale } from 'date-fns';

import { Pagination } from '~/components/Pagination';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { ApplicationContext } from '~/hooks/Application';

export function NewsList() {
  const { data, page, setPage, isLoading, totalCountOfRegisters } =
    useContext(ApplicationContext);

  return (
    <S.Container as="section">
      <S.Wrapper>
        {isLoading ? (
          <Stack
            paddingBottom={20}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Skeleton width="50%" height="10px" />
            <Skeleton width="50%" height="10px" />
            <Skeleton width="50%" height="10px" />
          </Stack>
        ) : (
          <>
            <S.List>
              <S.ListItem>
                {data.map((newsList) => (
                  <NextLink
                    key={newsList.id}
                    href={`/noticias/${newsList.slug}-${newsList.id}`}
                  >
                    <S.ListItemContent>
                      <C.Text as="span">
                        {newsList.date
                          ? format(
                              new Date(newsList.date),
                              "dd 'de' MMMM 'de' yyyy",
                              {
                                locale: BR as unknown as Locale,
                              },
                            )
                          : ''}
                      </C.Text>
                      <span>•</span>
                      <C.Text as="p" isTruncated noOfLines={[3, 3, 1]}>
                        {newsList.title}
                      </C.Text>
                    </S.ListItemContent>
                  </NextLink>
                ))}
              </S.ListItem>
            </S.List>
            <S.ContentPagination>
              {Number(totalCountOfRegisters) > 1 && (
                <Pagination
                  totalCountOfRegisters={Number(totalCountOfRegisters)}
                  currentPage={page}
                  onPageChange={setPage}
                />
              )}
            </S.ContentPagination>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
