'use client'

import { useState } from 'react'
import { Button } from '@/components/common/button'
import { Icons } from '@/components/common/icons'
import { Wrapper } from '@/components/common/wrapper'
import { SignInButton } from '@clerk/clerk-react'
import { SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { UserProfileButton } from '../shared/user-profile-button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
]

const BOOKING_PAGE_URL = '/booking'

interface Props {
  isAdmin: boolean
}

export const Header = ({ isAdmin }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Wrapper>
      <div className='flex items-center justify-between rounded-lg bg-doctrin-light-blue px-5 py-4 md:px-10'>
        <Link href='/'>
          <Icons.logo className='h-7' />
        </Link>

        <ul className='hidden items-center gap-4 md:flex md:gap-5'>
          {menuItems.map(item => (
            <li key={item.label}>
              <Link
                href={item.href}
                className='text-sm font-medium text-doctrin-neutral-secondary hover:text-doctrin-neutral-primary md:text-base'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2 md:hidden'>
          <UserProfileButton isAdmin={isAdmin} />

          <Button
            className='[&_path]:fill-white'
            size='icon'
            onClick={toggleMenu}
          >
            <Icons.menu />
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </div>

        <div className='hidden items-center gap-2 md:flex'>
          <SignedOut>
            <SignInButton mode='modal'>
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>

          <UserProfileButton isAdmin={isAdmin} />

          {!isAdmin && pathname !== BOOKING_PAGE_URL && (
            <Button variant='outline' asChild>
              <a href='/booking'>Book now</a>
            </Button>
          )}
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden bg-doctrin-light-blue transition-all duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <ul className='flex flex-col items-center gap-3 py-3'>
          {menuItems.map(item => (
            <li key={item.label}>
              <Link
                href={item.href}
                className='text-sm font-medium text-doctrin-neutral-secondary hover:text-doctrin-neutral-primary'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex flex-col items-center gap-2 py-2'>
          <SignedOut>
            <SignInButton mode='modal'>
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>

          {!isAdmin && pathname !== BOOKING_PAGE_URL && (
            <Button variant='outline' asChild>
              <a href='/booking'>Book now</a>
            </Button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
