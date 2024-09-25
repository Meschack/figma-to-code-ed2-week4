import { Button } from '@/components/common/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Table } from '@tanstack/react-table'
import { Icons } from '../common/icons'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table
}: DataTablePaginationProps<TData>) {
  return (
    <div className='mt-5 flex items-center justify-between'>
      <div className='hidden flex-1 text-sm text-muted-foreground md:block'>
        From{' '}
        {table.getState().pagination.pageIndex *
          table.getState().pagination.pageSize +
          1}{' '}
        to{' '}
        {table.getState().pagination.pageIndex *
          table.getState().pagination.pageSize +
          table.getState().pagination.pageSize <
        table.getFilteredRowModel().rows.length
          ? table.getState().pagination.pageIndex *
              table.getState().pagination.pageSize +
            table.getState().pagination.pageSize
          : table.getFilteredRowModel().rows.length}{' '}
        displayed on {table.getFilteredRowModel().rows.length}.
      </div>

      <div className='flex w-full flex-col justify-between gap-4 *:justify-between md:w-auto md:flex-row md:items-center md:justify-end *:md:justify-start'>
        <div className='flex items-center space-x-2'>
          <p className='text-sm font-medium'>Lines per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={value => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className='h-8 w-[132px] md:w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[10, 20, 30, 40, 50].map(pageSize => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center gap-x-1.5'>
          <div className='flex w-fit items-center justify-center text-sm font-medium'>
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </div>

          <div className='flex items-center space-x-0.5'>
            <Button
              variant='outline'
              className='size-8 p-0'
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className='sr-only'>Return to the first page</span>
              <Icons.doubleChevronLeft className='size-4' />
            </Button>

            <Button
              variant='outline'
              className='size-8 p-0'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className='sr-only'>Return to the previous page</span>
              <Icons.chevronLeft className='size-4' />
            </Button>

            <Button
              variant='outline'
              className='size-8 p-0'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className='sr-only'>Go to the next page</span>
              <Icons.chevronRight className='size-4' />
            </Button>

            <Button
              variant='outline'
              className='size-8 p-0'
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className='sr-only'>Go to the last page</span>
              <Icons.doubleChevronRight className='size-4' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
