import { News } from './news';
import { Advertisement } from './advertisement';

export interface HomeDataProps {
  advertisement: Advertisement[];

  recentNews: News[];

  news: News[];
}
