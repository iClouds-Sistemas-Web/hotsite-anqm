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
        id: item?.id || '',
        title: item?.title || '',
        resume: item?.resume || '',
        slug: `/noticias/${item?.slug || ''}-${item?.id}`,
        data: format(new Date(item?.date || ''), "dd 'de' MMMM 'de' yyyy", {
          locale: BR,
        }),
        cover: {
          alt: item.title || '',
          src: item.content_files[0].file_url || '',
        },
      };
    });

    return dataNews;
  } catch (error) {
    const data = [];

    return data;
  }
}
