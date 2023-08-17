export interface MovieApiResults {
  page: number;
  results: MovieResults[];
  total_pages: number;
  total_results: number;
}
export interface DiscoverResults extends MovieApiResults {}
export interface NowPlayingResults extends MovieApiResults {}
export interface TopRatedResults extends MovieApiResults {}
export interface SimilarResults extends MovieApiResults {}
export interface RecommendationResults extends MovieApiResults {
  media_type: string;
}
export interface UpComingResults extends MovieApiResults {
  dates: PlayingDates;
}

export interface NowPlayingResults extends MovieApiResults {
  dates: PlayingDates;
}

export interface MovieResults extends CommonMovieData {
  genre_ids: number[];
}

export interface GenreResults {
  genres: Genre[];
}
export interface CreditsResult {
  id: number;
  cast: Cast;
  crew: Crew;
}
export interface KeyWordsResult {
  id: number;
  keywords: KeyWords[];
}
export interface LatestMovie extends MovieDetails {}

export interface VideoApiResults {
  id: number;
  results: Video[];
}
export interface PlayingDates {
  minimum: string;
  maximum: string;
}

export interface CommonMovieData {
  adult: boolean;
  backdrop_path: boolean;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieDetails extends CommonMovieData {
  genres: Genre[];
  belongs_to_collection: Collection;
  budget: number;
  homepage: string;
  imdb_id: number;
  production_companies: Company[];
  production_countries: Country[];
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
}

export interface Collection {
  id: boolean;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface TVDetails {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Country {
  iso_3166_1: string;
  english_name: string;
  native_name?: string;
}

export interface CommonCreditsData {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
}
export interface Cast extends CommonCreditsData {
  cast_id: number;
  character: string;
  order: number;
}
export interface Crew extends CommonCreditsData {
  department: string;
  job: string;
}

export interface ImageData {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface Images {
  id: number;
  backdrops: ImageData[];
  logos: ImageData[];
  posters: ImageData[];
}

export interface KeyWords {
  id: number;
  name: string;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
