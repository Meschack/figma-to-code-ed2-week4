import Image from 'next/image'
import { Wrapper } from './common/wrapper'

export const Footer = () => {
  return (
    <footer className='bg-white py-6 font-general-sans'>
      <Wrapper className='flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0'>
        <div className='flex items-center space-x-2'>
          <Image
            src='/images/logo.svg'
            alt='Uifry logo'
            className='w-auto'
            width={8}
            height={8}
          />
        </div>

        <ul className='flex space-x-6 text-sm font-medium text-body-text'>
          <li>
            <a href='#' className='hover:text-primary transition'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-primary transition'>
              Service
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-primary transition'>
              Blogs
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-primary transition'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-primary transition'>
              Contact
            </a>
          </li>
        </ul>
      </Wrapper>

      <Wrapper className='mt-6 border-t pt-4 text-left text-sm font-medium text-body-text'>
        <div className='flex justify-between'>
          <p>
            All rights reserved © uifry.com |{' '}
            <a href='#' className='hover:text-primary transition'>
              Terms and conditions apply !
            </a>
          </p>
          <div className='flex space-x-4'>
            <img
              src='/icons/facebook.svg'
              alt='Facebook'
              width={30}
              height={30}
            />
            <img
              src='/icons/instagram.svg'
              alt='Instagram'
              width={30}
              height={30}
            />
            <img
              src='/icons/youtube.svg'
              alt='Youtube'
              width={30}
              height={30}
            />
            <img
              src='/icons/linkedin-footer.svg'
              alt='Linkedin'
              width={30}
              height={30}
            />
            <img
              src='/icons/twitter.svg'
              alt='Twitter'
              width={30}
              height={30}
            />
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
