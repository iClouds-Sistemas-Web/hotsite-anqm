import { Events } from './events';
import { News, DataNewsContent } from './news';
import { Advertisement } from './advertisement';
import { Institutional } from './institutional';

export interface pagesDataProps {
  news: News[];

  events: Events[];

  recentNews: News[];

  newsContent: DataNewsContent;

  institutional: Institutional;

  advertisement: Advertisement[];
}
