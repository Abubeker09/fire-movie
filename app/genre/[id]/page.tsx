import MovieCarousel from "@/components/MovieCarousel"
import { getDiscoverMovies } from "@/lib/getMovies"

type Props = {
  params: {
    id: string
  }
  searchParams: {
    genre: string
  }
}

const GenrePage =  async ({ params: {id}, searchParams: {genre} }: Props) => {
  const movies = await getDiscoverMovies(id)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-40">
        <h1 className="text-4xl font-bold px-10">Results for {genre}</h1>
        <MovieCarousel title="Genre" movies={movies} isVertical />
      </div>
    </div>
  )
}

export default GenrePage