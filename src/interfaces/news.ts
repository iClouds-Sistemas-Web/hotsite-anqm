import { ReactNode } from 'react';

export interface NewsProps {
  data?: News[];
  children?: ReactNode;
  amount_of_news?: number;
}

export interface News {
  id: number;
  title: string;
  resume: string;
  slug: string;
  date: string;
  cover: {
    alt: string;
    src: string;
  };
}

export interface DataNews {
  content_files: [
    {
      config_file_id: number;
      config_files: string;
      content_id: number;
      file: string;
      file_url: string;
      title: string;
    }
  ];
  content_id: number | null;
  created: Date;
  date: Date;
  exibir_capa: number;
  featured: number;
  gallery_id: number | null;
  id: number;
  index_id: number;
  keywords: string;
  language: string;
  link_em_nova_aba: string;
  link_externo: string;
  modified: Date;
  resume: string;
  slug: string;
  status: number;
  text: ReactNode;
  title: string;
}
