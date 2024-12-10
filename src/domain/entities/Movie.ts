export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
  adult: boolean;
  originalTitle: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
}
