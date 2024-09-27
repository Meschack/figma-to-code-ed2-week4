import notFound from '@@/icons/not-found.svg'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './button'

interface Props extends ComponentProps<'div'> {
  title?: string
  description?: string
  label?: string
  to?: string
}

export const ErrorComponent = ({
  description,
  label,
  title,
  to,
  className,
  ...rest
}: Props) => (
  <div
    className={cn('mx-auto flex flex-col items-center gap-10', className)}
    {...rest}
  >
    <Image
      alt='Not found illustration'
      width={400}
      height={400}
      decoding='async'
      src={notFound}
      priority
    />

    <div className='flex flex-col items-center gap-5 text-center'>
      <h2 className='text-2xl font-bold text-black'>
        {title ?? 'Page not found'}
      </h2>
      <p className='font-medium'>
        {description ??
          "The page you're looking for have been moved, deleted or don't exist."}
      </p>

      <Button variant='outline' asChild>
        <a
          className='!border-black !text-black hover:!bg-black hover:!text-white'
          href={to ?? '/'}
        >
          {label ?? 'Come back'}
        </a>
      </Button>
    </div>
  </div>
)
