import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type Props = PropsWithChildren<ComponentPropsWithoutRef<'div'>>

export const Wrapper = ({ className, children, ...rest }: Props) => {
  return (
    <div className={cn('px-5 lg:px-10 xl:px-20', className)} {...rest}>
      {children}
    </div>
  )
}
