/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../config';

import { format } from 'date-fns';
import BR from 'date-fns/locale/pt-BR';

import { mock } from '~/utils/contents';

export async function getNews(): Promise<any> {
  try {
    const { data } = await api.get(`contents`);

    return data;
  } catch (err) {
    const data = mock[0].rows.map((item) => {
      return {
        id: item?.id || '',
        title: item?.title || '',
        resume: item?.resume || '',
        date: format(new Date(item?.date || ''), "dd 'de' MMMM 'de' yyyy", {
          locale: BR,
        }),
        cover: {
          file: item.cover?.file || '',
        },
      };
    });

    return data;
  }
}
