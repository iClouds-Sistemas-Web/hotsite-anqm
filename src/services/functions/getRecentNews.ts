import { api } from '../config';

import { format } from 'date-fns';
import BR from 'date-fns/locale/pt-BR';

import { DataNews } from '~/interfaces/news';

export async function getRecentNews(): Promise<any> {
  try {
    const { data } = await api.get(
      `contents/recent?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&indexId=2`
    );

    const dataRecentNews = data.recentContents.map((item: DataNews) => {
      return {
        id: item?.id || '',
        title: item?.title || '',
        resume: item?.resume || '',
        slug: item?.slug || '',
        date: format(new Date(item?.date || ''), "dd 'de' MMMM 'de' yyyy", {
          locale: BR,
        }),
        cover: {
          alt: item.title || '',
          src: item.content_files[0].file_url || '',
        },
      };
    });

    return dataRecentNews;
  } catch (error) {
    const data = [];

    return data;
  }
}
