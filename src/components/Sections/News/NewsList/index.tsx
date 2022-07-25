import NextLink from 'next/link';
import { useEffect, useState } from 'react';

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
  useEffect(() => {
    api
      .get(
        `contents?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&page=${page}&amountNews=10&indexId=2`
      )
      .then((response) => {
        setData(response.data.contents);
        setTotalCountOfRegisters(response.headers['content-length']);
      });
  }, [page]);

  return (
    <S.Container as="section">
      <S.Wrapper>
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
                    <span> •</span>
                  </C.Text>

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
      </S.Wrapper>
    </S.Container>
  );
}
