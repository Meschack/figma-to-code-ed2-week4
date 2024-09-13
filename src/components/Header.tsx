'use client'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'

export default function Header() {
  return (
    <div className='mb-8 flex items-center justify-end gap-2 px-4 py-1.5'>
      <SignedOut>
        <SignInButton mode='modal'>
          <button className='rounded-2xl bg-blue-500 px-4 py-1 text-white'>
            {' '}
            Login{' '}
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}
