import { Icons } from '../../common/icons'
import Link from 'next/link'
import { UserProfileButton } from '../shared/user-profile-button'

interface Props {
  isAdmin: boolean
}

export const AdminLayoutHeader = ({ isAdmin }: Props) => {
  return (
    <header className='sticky top-0 flex items-center justify-between border-b-2 bg-white p-8'>
      <Link href='/'>
        <Icons.logo className='h-10' />
      </Link>

      <div className='flex items-center gap-5'>
        <Icons.bell />

        <Icons.settings />

        <UserProfileButton isAdmin={isAdmin} />
      </div>
    </header>
  )
}
