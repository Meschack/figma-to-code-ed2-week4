import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const Loading = () => {
  return (
    <div className='space-y-5'>
      <h1>Patients list</h1>

      <div className='w-full py-4'>
        <div className='mb-4 flex items-center justify-between'>
          <Skeleton className='h-9 w-40' />
          <Skeleton className='h-9 w-20' />
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200 rounded-md border'>
            <thead className='bg-gray-50'>
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <th
                    scope='col'
                    key={index}
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    <Skeleton className='h-6 w-3/5' />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-200 bg-white'>
              {Array.from({ length: 8 }).map((_, index) => (
                <tr key={index}>
                  {Array.from({ length: 3 }).map((_, cellIndex) => (
                    <td className='whitespace-nowrap px-6 py-4' key={cellIndex}>
                      <Skeleton
                        className={cn('h-6 w-full', cellIndex === 2 && 'w-6')}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <Skeleton className='h-7 w-1/6' />
          <Skeleton className='h-7 w-1/4' />
        </div>
      </div>
    </div>
  )
}

export default Loading
