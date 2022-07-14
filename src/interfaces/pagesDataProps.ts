import { News } from './news';
import { Advertisement } from './advertisement';

export interface pagesDataProps {
  news: News[];

  recentNews: News[];

  advertisement: Advertisement[];
}
