import { Skeleton } from '@/components/ui/skeleton'

const Loading = ({ canManage = true }: { canManage?: boolean }) => {
  return (
    <div>
      <h1>My appointments</h1>

      <div className='space-y-10'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className='flex w-full flex-col items-center justify-between gap-4'
          >
            <Skeleton className='mx-auto h-8 w-32' />

            <div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2'>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className='flex w-full cursor-pointer flex-col gap-5 rounded-md border p-5 hover:bg-muted'
                >
                  <div className='flex items-center gap-5'>
                    <Skeleton className='size-12 shrink-0 rounded-full' />

                    <div className='space-y-2'>
                      <Skeleton className='h-5 w-48' />

                      <div className='flex items-center gap-2'>
                        <Skeleton className='h-5 w-20' />
                        <span>-</span>
                        <Skeleton className='h-5 w-20' />
                      </div>
                    </div>
                  </div>

                  <main className='flex grow cursor-pointer flex-col justify-between gap-5'>
                    <div className='space-y-3'>
                      <Skeleton className='h-5 w-3/4' />

                      <div className='space-y-1'>
                        <Skeleton className='h-5 w-full' />
                        <Skeleton className='h-5 w-1/2' />
                      </div>
                    </div>

                    {!canManage && (
                      <p>
                        Status : <Skeleton className='h-5 w-40' />
                      </p>
                    )}

                    {canManage && (
                      <div className='grid grid-cols-2 gap-5'>
                        <Skeleton className='h-10' />
                        <Skeleton className='h-10' />
                      </div>
                    )}
                  </main>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Loading
