import { Events } from './events';
import { News, DataNewsContent } from './news';
import { Advertisement } from './advertisement';

export interface pagesDataProps {
  news: News[];

  events: Events[];

  recentNews: News[];

  newsContent: DataNewsContent;

  advertisement: Advertisement[];
}
