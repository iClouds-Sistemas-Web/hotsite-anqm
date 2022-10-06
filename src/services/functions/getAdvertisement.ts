/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../config';

export async function getAdvertisement(): Promise<any> {
  try {
    const { data } = await api.get(
      `advertisement?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}`
    );

    return data.advertisements;
  } catch (error) {
    const data = [];

    return data;
  }
}
