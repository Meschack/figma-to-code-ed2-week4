import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Button } from '@/components/common/button'

import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { PropsWithChildren, useState } from 'react'
import { DataTablePagination } from './data-table-pagination'
import { Icons } from '../common/icons'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from './dropdown-menu'

type WithId = {
  id: string
}

export interface DataTableLayoutProps<T extends WithId> {
  data: T[]
  columns: ColumnDef<T>[]
  tableHeaderLabels: Partial<
    Record<keyof T | 'add' | 'status', string> & {
      [K in keyof T as `${string & K}_${string}`]?: string
    }
  >
  searchInputPlaceholder?: string
}

export interface DataTableLayoutProps<T extends WithId> {
  searchColumn?: keyof DataTableLayoutProps<T>['tableHeaderLabels']
}

export const DataTableLayout = <T extends WithId>({
  data,
  columns,
  tableHeaderLabels,
  searchColumn,
  searchInputPlaceholder = 'Filter by names...',
  children
}: PropsWithChildren<DataTableLayoutProps<T>>) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: { sorting, columnFilters, columnVisibility }
  })

  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <>
      <div className='flex items-center justify-between gap-4 py-4'>
        <div className='flex gap-2'>
          <Input
            placeholder={searchInputPlaceholder}
            value={
              (table
                .getColumn(searchColumn?.toString() || 'name')
                ?.getFilterValue() as string) ?? ''
            }
            onChange={event =>
              table
                .getColumn(searchColumn?.toString() || 'name')
                ?.setFilterValue(event.target.value)
            }
            className='max-w-sm'
          />

          {isFiltered && (
            <Button
              variant='link'
              onClick={() => table.resetColumnFilters()}
              className='hidden items-center px-2 text-black lg:flex lg:gap-2 lg:px-3 [&_svg]:text-black'
            >
              Reset
              <Icons.cross className='size-4' />
            </Button>
          )}
        </div>

        <div className='flex w-fit items-center gap-2'>
          <div className='hidden xl:block'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='h-full'>
                <Button variant='outline' className='ml-auto h-full'>
                  Columns <Icons.chevronDown className='ml-2 size-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                {table
                  .getAllColumns()
                  .filter(
                    column => column.getCanHide() && column.id !== 'status'
                  )
                  .map(column => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        checked={column.getIsVisible()}
                        onCheckedChange={value =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {tableHeaderLabels[
                          column.id as keyof typeof tableHeaderLabels
                        ] ?? column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {children}
        </div>
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader className='bg-muted'>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell =>
                    cell.id === 'status' ? null : (
                      <TableCell
                        key={cell.id}
                        /* className={cn(
                          cell.column.columnDef.meta?.className,
                          cell.column.columnDef.meta?.breakpoint &&
                            `hidden ${cell.column.columnDef.meta.breakpoint}:table-cell`
                        )} */
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  Aucun résultat
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </>
  )
}
