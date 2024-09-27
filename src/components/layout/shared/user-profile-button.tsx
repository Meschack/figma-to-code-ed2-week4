'use client'

import { Icons } from '@/components/common/icons'
import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import { Skeleton } from '@/components/ui/skeleton'

interface Props {
  isAdmin: boolean
  withMenu?: boolean
}

export const UserProfileButton = ({ isAdmin, withMenu = true }: Props) => {
  const { isLoaded } = useUser()

  if (!isLoaded) {
    return <Skeleton className='size-10 rounded-full' />
  }

  return (
    <SignedIn>
      <UserButton appearance={{ elements: { userButtonAvatarBox: 'size-10' } }}>
        <UserButton.MenuItems>
          {!isAdmin && (
            <UserButton.Link
              label='My appointments'
              labelIcon={<Icons.calendar className='size-4' />}
              href='/my-appointments'
            />
          )}

          {isAdmin && withMenu && (
            <UserButton.Link
              label='Dashboard'
              labelIcon={<Icons.dashboard className='size-4' />}
              href='/admin'
            />
          )}
        </UserButton.MenuItems>
      </UserButton>
    </SignedIn>
  )
}
