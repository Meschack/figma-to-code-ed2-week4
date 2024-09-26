import Link from 'next/link'
import { Wrapper } from './common/wrapper'
import { Icons } from '@/components/common/icons'

export const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <Wrapper className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-2">
        <Link href='/'>
          <Icons.logo className='h-7' />
        </Link>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-body-text md:space-x-6">
          <li>
            <a href="#" className="hover:text-primary transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Contact
            </a>
          </li>
        </ul>
      </Wrapper>

      <Wrapper className="mt-6 border-t pt-4 text-left text-sm font-medium text-body-text">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-center md:text-left">
            All rights reserved © Doctrin |{' '}
            <a href="#" className="hover:text-primary transition">
              Terms and conditions apply!
            </a>
          </p>

          <div className="flex space-x-4">
            <img
              src="/icons/facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
            <img
              src="/icons/youtube.svg"
              alt="Youtube"
              width={30}
              height={30}
            />
            <img
              src="/icons/linkedin-footer.svg"
              alt="Linkedin"
              width={30}
              height={30}
            />
            <img
              src="/icons/twitter.svg"
              alt="Twitter"
              width={30}
              height={30}
            />
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
