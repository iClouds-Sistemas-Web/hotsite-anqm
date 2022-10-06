/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../config';

import { DataEvents } from '~/interfaces/events';

export async function getEvents(): Promise<any> {
  try {
    const { data } = await api.get(`events`);

    const dataEvents = data.events.map((item: DataEvents) => {
      return {
        ...(item.id && { id: item.id }),
        ...(item.title && { title: item.title }),
        ...(item.banner_file
          ? {
              banner_file: Object({
                src_small: item.banner_file.small,
                src_medium: item.banner_file.medium,
                src_large: item.banner_file.large,
              }),
            }
          : {
              banner_file: Object({
                alt: 'Capa não encontrada!',
                src: '/images/image-not-found.jpg',
              }),
            }),
      };
    });

    return dataEvents;
  } catch (error) {
    const data = [];

    return data;
  }
}
