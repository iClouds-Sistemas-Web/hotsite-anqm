import { api } from '../config';

export async function getNews(): Promise<any> {
  try {
    const { data } = await api.get(
      `contents?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&page=1&amountNews=5&indexId=2`
    );

    return data.contents;
  } catch (error) {
    const data = [];

    return data;
  }
}
