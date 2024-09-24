import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'div'> {}

export const Skeleton = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md bg-gray-400/20 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent dark:before:via-white/20',
        className
      )}
      {...props}
    />
  )
}
