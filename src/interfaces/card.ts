export interface CardProps {
  data?: {
    id: number;
    date: string;
    title: string;
    cover?: {
      id: number;
      file: string;
    };
  };
}
