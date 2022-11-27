export interface TitleModel {
  id: number;
  title: string;
  description?: string | null;
  directors: string | null;
  stars?: string | null;
  image: string | null;
  year: number;
  genres: string;
  rating: number | null;
  contentRating: string | null;
  voteCount?: number;
  meterRanking?: number | null;
  plot: string | null;
  runtime: number | null;
  runtimeStr?: string | null;
  trailer?: string | null;
  countries?: string | null;
  companies?: string | null;
  poster: string | null;
  backdrop: string | null;
}

export interface TitleArrayModel {
  title: TitleModel | null;
  titles: TitleModel[];
  genres: string[];
}
