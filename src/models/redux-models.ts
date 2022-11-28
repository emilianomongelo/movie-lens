export interface TitleModel {
  id: string;
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

export interface Genre {
  id: string;
  displayName: string;
}

export interface TitlesArrayModel {
  loading: boolean;
  title: TitleModel | null;
  titles: TitleModel[];
  genres: Genre[];
}

export interface UserArrayModel {
  favourites: string[];
  watchLater: string[];
}