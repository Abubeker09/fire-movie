import getImagePath from "@/lib/getImagePath"
import { Movie } from "@/typings"
import Image from "next/image"

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/0 via-red-800/10 to-gray-500 dark:to-gray-400 z-10" />
      <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
      <Image
      className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-red-600 dark:shadow-red-400 drop-shadow-xl rounded-md"
        src={getImagePath( movie.backdrop_path || movie.poster_path)}
        alt="movie image" 
        width={1920} 
        height={1080} 
        key={movie.id} 
      />
    </div>
  )
}

export default MovieCard