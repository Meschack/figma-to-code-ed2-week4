import { SignedIn, UserButton } from '@clerk/nextjs'
import { Icons } from '../../common/icons'
import Link from 'next/link'

interface Props {}

export const AdminLayoutHeader = ({}: Props) => {
  return (
    <header className='flex items-center justify-between border-b-2 p-8'>
      <Link href='/'>
        <Icons.logo className='h-10' />
      </Link>

      <div className='flex items-center gap-5'>
        <Icons.bell />
        <Icons.settings />
        <SignedIn>
          <UserButton
            appearance={{ elements: { userButtonAvatarBox: 'size-10' } }}
          />
        </SignedIn>
      </div>
    </header>
  )
}
