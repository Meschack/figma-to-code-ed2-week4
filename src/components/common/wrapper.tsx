import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ className, children, ...rest }: Props) => (
  <div
    className={cn(
      'md:max-w-tablet xl:max-w-desktop mx-auto w-full max-w-[calc(100vw-40px)]',
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
