import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/common/icons'
import { Button } from '@/components/common/button'

interface Props extends ComponentProps<typeof Button> {
  loading?: boolean | undefined
  loadingText?: string
  icon?: React.ComponentType<{ className?: string }>
}

export const LoadingButton = (props: Props) => {
  const {
    loading,
    loadingText = 'Loading...',
    className,
    icon,
    children,
    variant,
    ...rest
  } = props

  return (
    <Button
      disabled={loading}
      type='submit'
      className={cn('flex items-center', className)}
      variant={variant}
      {...rest}
    >
      {loading ? (
        <>
          <Icons.spinner className={cn('-ml-1 mr-3 size-5 animate-spin')} />
          {loadingText}
        </>
      ) : (
        <div className='flex items-center gap-1'>
          {props.icon && <props.icon className='size-3.5' />}

          {children}
        </div>
      )}
    </Button>
  )
}
