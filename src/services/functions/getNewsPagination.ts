/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../config';

import { format } from 'date-fns';
import BR from 'date-fns/locale/pt-BR';

import { DataNews } from '~/interfaces/news';

export async function getNewsPagination(): Promise<any> {
  try {
    const { data } = await api.get(
      `contents?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&page=1&amountNews=10&indexId=2`
    );

    const dataNews = data.contents.map((item: DataNews) => {
      return {
        ...(item.id && { id: item.id }),
        ...(item.title && { title: item.title }),
        ...(item.resume && { resume: item.resume }),
        ...(item.slug && { slug: `/noticias/${item.slug}-${item.id}` }),
        ...(item.date && {
          date: format(new Date(item?.date), "dd 'de' MMMM 'de' yyyy", {
            locale: BR,
          }),
        }),
      };
    });

    return dataNews;
  } catch (error) {
    const data = [];

    return data;
  }
}
