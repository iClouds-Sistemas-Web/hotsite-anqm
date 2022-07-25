import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';

import { format } from 'date-fns';
import BR from 'date-fns/locale/pt-BR';
import { api } from '~/services/config';

import { Pagination } from '~/components/Pagination';

import * as S from './styles';
import * as C from '@chakra-ui/react';

import { News } from '~/interfaces/news';

export function NewsList() {
  const [page, setPage] = useState(1);

  const [data, setData] = useState<News[]>([]);

  const [totalCountOfRegisters, setTotalCountOfRegisters] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(
        `contents?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&page=${page}&amountNews=10&indexId=2`
      )
      .then((response) => {
        setIsLoading(true);
        setData(response.data.contents);
        setTotalCountOfRegisters(response.headers['content-length']);
        setIsLoading(false);
      });
  }, [page]);

  return (
    <S.Container as="section">
      <S.Wrapper>
        {isLoading ? (
          <Stack paddingBottom={20} justifyContent="center" alignItems="center">
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
                                locale: BR,
                              }
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
              <Pagination
                totalCountOfRegisters={Number(totalCountOfRegisters)}
                currentPage={page}
                onPageChange={setPage}
              />
            </S.ContentPagination>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
