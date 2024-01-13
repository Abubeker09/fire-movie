"use client"

import { Movie } from "@/typings"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import getImagePath from "@/lib/getImagePath"

type Props = {
  movies: Movie[];
}

Autoplay.globalOptions = { delay: 8000 }

const CarouselBanner = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()])

  return (
    <div
      className="overflow-hidden relative cursor-pointer" 
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map(movie => (
          <div key={movie.id} className="flex-full min-w-0 relative">
            <Image 
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)} 
              alt="big image"
              width= {2000}
              height={1000}
            />
            <div className="hidden md:inline absolute mt-0 top-0 px-2 pt-40 xl:pt-52 left-0 bg-transparent z-20 w-full h-[200%] bg-gradient-to-r from-gray-200/90 dark:from-gray-900/90 to-transparent p-10 space-y-5" >
              <h2 className="text-5xl font-bold my-10 max-w-xl z-50">{movie.title}</h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="abslute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-gray-800" />
    </div>
  )
}

export default CarouselBanner