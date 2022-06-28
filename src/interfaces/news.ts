import { ReactNode } from 'react';

export interface NewsProps {
  data: DataNewsProps;
  children?: ReactNode;
  amount_of_news: number;
}

export interface DataNewsProps {
  news?: [
    {
      id: number;
      date: string;
      title: string;
      resume: string;
      cover?: {
        id: number;
        file: string;
      };
    }
  ];
}
