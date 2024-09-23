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
        'group flex items-center gap-2 rounded-md p-4 text-doctrin-neutral-secondary hover:bg-doctrin-neutral-100',
        isActive && 'bg-doctrin-neutral-100',
        className
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
          'inline-flex text-sm font-medium group-hover:text-doctrin-neutral-primary'
        )}
      >
        {element.label}
      </span>
    </Link>
  )
}
