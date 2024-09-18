import Link from 'next/link'
import { SidebarElement } from './sidebar'
import { cn } from '@/lib/utils'
import { Icons } from '../../common/icons'
import { ComponentProps } from 'react'

interface Props extends Omit<ComponentProps<typeof Link>, 'href'> {
  element: SidebarElement
  isActive: boolean
}

export const SidebarLink = ({
  element,
  isActive,
  className,
  ...rest
}: Props) => {
  const IconComponent = Icons[element.icon]

  return (
    <Link
      href={element.path}
      className={cn(
        'text-doctrin-neutral-secondary hover:bg-doctrin-neutral-100 group flex items-center gap-2 rounded-md p-4',
        isActive && 'bg-doctrin-neutral-100'
      )}
      key={element.path}
      {...rest}
    >
      <IconComponent
        className={cn(
          isActive
            ? 'text-doctrin-neutral-primary'
            : 'text-doctrin-neutral-secondary',
          'group-hover:text-doctrin-neutral-primary'
        )}
      />

      <span
        className={cn(
          isActive
            ? 'text-doctrin-neutral-primary'
            : 'text-doctrin-neutral-secondary',
          'group-hover:text-doctrin-neutral-primary inline-flex text-sm font-medium'
        )}
      >
        {element.label}
      </span>
    </Link>
  )
}
