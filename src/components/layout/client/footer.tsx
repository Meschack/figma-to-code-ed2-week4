import Link from 'next/link'
import { Wrapper } from '../../common/wrapper'
import { Icons } from '@/components/common/icons'

const socialLinks = [
  {
    href: 'https://facebook.com/doctrin',
    icon: Icons.facebook,
    label: 'Facebook'
  },
  {
    href: 'https://instagram.com/doctrin',
    icon: Icons.instagram,
    label: 'Instagram'
  },
  {
    href: 'https://youtube.com/doctrin',
    icon: Icons.youtube,
    label: 'Youtube'
  },
  {
    href: 'https://linkedin.com/in/doctrin',
    icon: Icons.linkedin,
    label: 'LinkedIn'
  },
  {
    href: 'https://twitter.com/doctrin',
    icon: Icons.twitter,
    label: 'Twitter'
  }
]

export const Footer = () => {
  return (
    <footer className='bg-white py-6'>
      <Wrapper className='flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0'>
        <div className='flex items-center space-x-2'>
          <Link href='/'>
            <Icons.logo className='h-7' />
          </Link>
        </div>

        <ul className='flex flex-wrap justify-center gap-4 text-sm font-medium text-body-text md:space-x-6'>
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
        <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
          <p className='text-center md:text-left'>
            All rights reserved &copy; Doctrin |{' '}
            <a href='#' className='hover:text-primary transition'>
              Terms and conditions apply!
            </a>
          </p>

          <div className='flex items-center gap-4'>
            {socialLinks.map(link => (
              <Link
                href={link.href}
                className='grid place-content-center rounded-full bg-doctrin-dark-blue p-2'
                key={link.label}
                title={link.label}
              >
                <link.icon className='size-4' />
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
