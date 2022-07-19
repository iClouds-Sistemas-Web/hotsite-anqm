import { News, DataNewsContent } from './news';
import { Advertisement } from './advertisement';

export interface pagesDataProps {
  news: News[];

  recentNews: News[];

  newsContent: DataNewsContent;

  advertisement: Advertisement[];
}
