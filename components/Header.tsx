import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'

const Header = () => {
  return (
    <header className='flex justify-between items-center fixed w-full top-0 left-0 z-50 px-2 py-1 bg-gradient-to-t from-red-400/0 via-red-400/25 to-red-500/75'>
      <Link href='/'>
        <Image src='/fire-movie-logo.png' alt='logo' width={100} height={100} className='w-auto' />
      </Link>

      <div className='flex space-x-3'>
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header