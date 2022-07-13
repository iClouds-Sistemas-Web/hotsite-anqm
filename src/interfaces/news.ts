import { ReactNode } from 'react';

export interface NewsProps {
  data?: DataNewsProps[];
  children?: ReactNode;
  amount_of_news?: number;
}

export interface DataNewsProps {
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
  created: any;
  date: any;
  exibir_capa: number;
  featured: number;
  gallery_id: number | null;
  id: number;
  index_id: number;
  keywords: string;
  language: string;
  link_em_nova_aba: string;
  link_externo: string;
  modified: any;
  resume: string;
  slug: string;
  status: number;
  text: ReactNode;
  title: string;
}
