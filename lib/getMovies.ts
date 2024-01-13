import { SearchResults } from "@/typings"

async function fetchFromTMDB(url: URL, catcheTime?: number) {
  url.searchParams.set("include_adult", "false")
  url.searchParams.set("include_video", "true")
  url.searchParams.set("sort_by", "popularity.desc")
  url.searchParams.set("language", "en-US")
  url.searchParams.set("page", "1")

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.TMDB_API_KEY}`
    },
    next: {
      revalidate: catcheTime || 60 * 60 * 24,
    }
  }
  const res = await fetch(url, options);
  const data = (await res.json()) as SearchResults;

  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming")
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated")
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular")
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie")

  keywords && url.searchParams.set("with_keywords", keywords)
  id && url.searchParams.set("with_genres", id)

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getSearchedMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie")

  url.searchParams.set("query", term)
  
  const data = await fetchFromTMDB(url);
  return data.results;
}