import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Header = () => {
  return (
    <header className='mx-auto my-8 max-w-6xl rounded-xl bg-light-blue py-3 font-general-sans'>
      <div className='container mx-auto flex items-center justify-between px-6'>
        <Image
          src='/images/logo.svg'
          alt='uifry logo'
          width={100}
          height={100}
        />

        <nav className='hidden space-x-8 text-dark-blue md:flex'>
          <Link href='/' className='font-semibold'>
            Home
          </Link>
          <Link href='/services' className='font-medium'>
            Services
          </Link>
          <Link href='/blogs' className='font-medium'>
            Blogs
          </Link>
          <Link href='/about' className='font-medium'>
            About
          </Link>
          <Link href='/contact' className='font-medium'>
            Contact
          </Link>
        </nav>

        <div className='flex items-center space-x-4'>
          <div className='rounded-full border-2 border-white'>
            <Image
              src='/images/avatar.svg'
              alt='Profile'
              width={45}
              height={45}
              className='rounded-full'
            />
          </div>
          <Button href='/book-now' text='Book Now' />
        </div>
      </div>
    </header>
  )
}

export default Header
