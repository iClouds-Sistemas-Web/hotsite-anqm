export interface EventsProps {
  data?: Events[];
}

export interface Events {
  id: number;
  title: string;
  banner_file: {
    src_small: string;
    src_medium: string;
    src_large: string;
  };
}

export interface DataEvents {
  address: string;
  banner_file: {
    large: string;
    medium: string;
    small: string;
  };
  banner_url: null;
  city: string;
  client_id: number;
  clients: {
    association_id: number;
    created: null;
    data: string;
    full_name: string;
    id: number;
    identifier: string;
    modified: Date;
    name: string;
  };
  created: Date;
  description: string;
  event_categorie_id: number;
  featured: number;
  finish_date: Date;
  finish_hour: Date;
  id: number;
  inscription_available: number;
  inscription_finish_date: null;
  inscription_start_date: null;
  language: string;
  live_home: number;
  modified: Date;
  neighborhood: string;
  number: string;
  organizer: string;
  park_id: null;
  place_name: string;
  postal_code: string;
  premium: number;
  seal_id: null;
  start_date: Date;
  start_hour: Date;
  state: string;
  status: number;
  streaming_link: string;
  title: string;
  url: string;
  website: string;
}
