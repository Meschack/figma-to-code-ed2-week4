'use client'
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
  return (
    <Wrapper>
      <div className='flex items-center justify-between rounded-lg bg-doctrin-light-blue px-10 py-5'>
        <Link href='/'>
          <Icons.logo className='h-8' />
        </Link>

        <ul className='flex items-center gap-5'>
          {menuItems.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className='text-base font-medium text-doctrin-neutral-secondary hover:text-doctrin-neutral-primary'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2'>
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
