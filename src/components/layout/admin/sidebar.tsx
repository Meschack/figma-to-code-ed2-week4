'use client'

import { usePathname } from 'next/navigation'
import { Icons } from '../../common/icons'
import { SidebarLink } from './sidebar-link'

interface Props {}

export interface SidebarElement {
  label: string
  path: string
  icon: keyof typeof Icons
}

const sidebarElements: SidebarElement[] = [
  { label: 'Dashboard', path: '/admin', icon: 'dashboard' },
  { label: 'Patient List', path: '/admin/patients', icon: 'patients' },
  { label: 'Appointment', path: '/admin/appointments', icon: 'calendar' }
]

export const Sidebar = ({}: Props) => {
  const pathname = usePathname()

  return (
    <aside className='sticky top-28 flex h-full w-60 flex-col gap-1 p-4'>
      {sidebarElements.map(element => (
        <SidebarLink
          element={element}
          isActive={pathname === element.path}
          key={element.path}
        />
      ))}
    </aside>
  )
}
