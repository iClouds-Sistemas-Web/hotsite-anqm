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
        ...(item.id && { id: item.id }),
        ...(item.title && { title: item.title }),
        ...(item.resume && { resume: item.resume }),
        ...(item.slug && { slug: `/noticias/${item.slug}-${item.id}` }),
        ...(item.date && {
          date: format(new Date(item?.date), "dd 'de' MMMM 'de' yyyy", {
            locale: BR,
          }),
        }),
        cover: {
          src: '/images/image-not-found.jpg',
        },
      };
    });

    console.log('data', data.recentContents.content_files);

    return dataRecentNews;
  } catch (error) {
    const data = [];

    return data;
  }
}
