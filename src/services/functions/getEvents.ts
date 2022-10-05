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
        banner_file: {
          ...(item.banner_file.small && { src_small: item.banner_file.small }),
          ...(item.banner_file.medium && {
            src_medium: item.banner_file.medium,
          }),
          ...(item.banner_file.large && { src_large: item.banner_file.large }),
        },
      };
    });

    return dataEvents;
  } catch (error) {
    const data = [];

    return data;
  }
}
