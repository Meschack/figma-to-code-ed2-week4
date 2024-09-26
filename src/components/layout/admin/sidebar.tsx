import { Icons } from '../../common/icons'
import Link from 'next/link'
import { SidebarLinksList } from './sidebar-links-list'

export interface SidebarElement {
  label: string
  path: string
  icon: keyof typeof Icons
}

export const Sidebar = () => {
  return (
    <aside className='sticky hidden h-full w-60 shrink-0 flex-col gap-8 border-r-2 px-4 py-8 xl:flex'>
      <Link href='/'>
        <Icons.logo className='h-10' />
      </Link>

      <SidebarLinksList />
    </aside>
  )
}
