'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/common/button'
import { Icons } from '@/components/common/icons'
import { Wrapper } from '@/components/common/wrapper'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <Image
              alt='Menu Icon'
              src='/icons/menu.svg'
              width={40}
              height={40}
            />
          </button>
        </div>

        <div className='hidden items-center gap-2 md:flex'>
          <SignedOut>
            <SignInButton mode='modal'>
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: 'size-10' } }}
            />
          </SignedIn>

          <Button variant='outline' asChild>
            <Link href='booking'>Book now</Link>
          </Button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-doctrin-light-blue`}
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

          <SignedIn>
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: 'size-10' } }}
            />
          </SignedIn>

          <Button variant='outline' asChild>
            <Link href='booking'>Book now</Link>
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}
