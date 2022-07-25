export interface AdvertisementProps {
  data?: Advertisement[];
}

export interface Advertisement {
  id: number;
  title: string;
  file_url: string;
}
