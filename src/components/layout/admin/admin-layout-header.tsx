import { Icons } from '../../common/icons'
import { UserProfileButton } from '../shared/user-profile-button'
import { MobileMenu } from './mobile-menu'

export const AdminLayoutHeader = () => {
  return (
    <header className='sticky top-0 z-20 flex items-center justify-between border-b-2 bg-white p-8 xl:justify-end'>
      <MobileMenu />

      <div className='flex items-center gap-5'>
        <Icons.bell />

        <Icons.settings />

        <UserProfileButton withMenu={false} isAdmin />
      </div>
    </header>
  )
}
