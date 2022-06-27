export interface Movies {
results?: (ResultsEntity)[] | null;
page: number;
total_results: number;
dates: Dates;
total_pages: number;
}
export interface ResultsEntity {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  media_type: string;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Dates{
  maximum: string;
  minimum: string;
 }
