'use client'

import { Icons } from '@/components/common/icons'
import { SignedIn, UserButton } from '@clerk/nextjs'

interface Props {
  isAdmin: boolean
}

export const UserProfileButton = ({ isAdmin }: Props) => {
  return (
    <SignedIn>
      <UserButton appearance={{ elements: { userButtonAvatarBox: 'size-10' } }}>
        {isAdmin && (
          <UserButton.MenuItems>
            <UserButton.Link
              label='Dashboard'
              labelIcon={<Icons.dashboard className='size-4' />}
              href='/admin'
            />
          </UserButton.MenuItems>
        )}
      </UserButton>
    </SignedIn>
  )
}
