import { api } from '../config';

export async function getInstitutional(id: number): Promise<any> {
  try {
    const { data } = await api.get(
      `contents/${id}?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}&indexId=1`
    );

    return data.singleSpecificContent;
  } catch (error) {
    const data = [];

    return data;
  }
}
