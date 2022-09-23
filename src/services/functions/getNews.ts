import { api } from '../config';

import { format } from 'date-fns';
import BR from 'date-fns/locale/pt-BR';

import { DataNews } from '~/interfaces/news';

export async function getNews(): Promise<any> {
  try {
    const { data } = await api.get(
      `contents?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&page=1&amountNews=5&indexId=2`
    );

    const dataNews = data.contents.map((item: DataNews) => {
      return {
        ...(item.id && { id: item.id }),
        ...(item.title && { title: item.title }),
        ...(item.resume && { resume: item.resume }),
        ...(item.slug && { slug: `/noticias/${item?.slug || ''}-${item?.id}` }),
        date: format(new Date(item?.date || ''), "dd 'de' MMMM 'de' yyyy", {
          locale: BR,
        }),
        cover: {
          ...(item.title && { alt: item.title }),
          ...(item.content_files[0].file_url && {
            src: item.content_files[0].file_url,
          }),
        },
      };
    });

    return dataNews;
  } catch (error) {
    const data = [];

    return data;
  }
}

export async function getNewsContent(id: string): Promise<any> {
  try {
    const { data } = await api.get(
      `contents/${id}?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&indexId=2`
    );

    const dataNewsContent = data.singleSpecificContent;

    return dataNewsContent;
  } catch (error) {
    const data = [];

    return data;
  }
}
