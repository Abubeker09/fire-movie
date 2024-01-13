import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
    <main>
      <CarouselBannerWrapper />

      <div>
        <MovieCarousel movies={upcomingMovies} title="Upcoming" />
        <MovieCarousel movies={topRatedMovies} title="Top Rated" />
        <MovieCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  )
}
