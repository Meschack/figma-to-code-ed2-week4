import { UserProfileButton } from '../shared/user-profile-button'
import { MobileMenu } from './mobile-menu'
import { NotificationsIndicator } from './notifications-indicator'

export const AdminLayoutHeader = () => {
  return (
    <header className='sticky top-0 z-20 flex items-center justify-between border-b-2 bg-white p-4 md:p-8 xl:justify-end'>
      <MobileMenu />

      <div className='flex items-center gap-5'>
        <NotificationsIndicator />

        <UserProfileButton withMenu={false} isAdmin />
      </div>
    </header>
  )
}
