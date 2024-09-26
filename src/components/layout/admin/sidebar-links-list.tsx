'use client'

import { usePathname } from 'next/navigation'
import { SidebarElement } from './sidebar'
import { SidebarLink } from './sidebar-link'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const sidebarElements: SidebarElement[] = [
  { label: 'Dashboard', path: '/admin', icon: 'dashboard' },
  { label: 'Patient List', path: '/admin/patients', icon: 'patients' },
  { label: 'Appointment', path: '/admin/appointments', icon: 'calendar' }
]

interface SidebarLinksListProps extends ComponentProps<'div'> {
  onLinkClick?: () => void
}

export const SidebarLinksList = ({
  onLinkClick,
  className,
  ...rest
}: SidebarLinksListProps) => {
  const pathname = usePathname()

  return (
    <div className={cn('flex flex-col gap-1 py-4', className)} {...rest}>
      {sidebarElements.map(element => (
        <SidebarLink
          element={element}
          isActive={pathname === element.path}
          key={element.path}
          onClick={onLinkClick}
        />
      ))}
    </div>
  )
}
