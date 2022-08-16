import { api } from '../config';

import { DataEvents } from '~/interfaces/events';

export async function getEvents(): Promise<any> {
  try {
    const { data } = await api.get(`events`);

    const dataEvents = data.events.map((item: DataEvents) => {
      return {
        id: item?.id || '',
        title: item?.title || '',
        banner_file: {
          src_small: item.banner_file.small || '',
          src_medium: item.banner_file.medium || '',
          src_large: item.banner_file.large || '',
        },
      };
    });

    return dataEvents;
  } catch (error) {
    const data = [];

    return data;
  }
}
