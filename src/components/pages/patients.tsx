'use client'

import { ClerkUserImportantElements } from '@/types/user'
import { DataTableLayout, DataTableLayoutProps } from '../ui/datatable-layout'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../common/button'
import { Icons } from '../common/icons'
import { CustomImage } from '../common/custom-image'

interface Props {
  users: Array<
    ClerkUserImportantElements & { appointmentCount: number; id: string }
  >
}

const headerLabels: DataTableLayoutProps<
  Props['users'][number]
>['tableHeaderLabels'] = {
  fullName: 'Fullname',
  email: 'Email',
  appointmentCount: 'Number of appointments'
}

const columns: ColumnDef<Props['users'][number]>[] = [
  {
    accessorKey: 'fullName',
    header: ({ column }) => {
      return (
        <Button
          variant='link'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='px-2 text-black [&_svg]:text-black'
        >
          Fullname
          <Icons.chevronUpDown className='ml-2 size-3' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='flex items-center gap-2'>
        <div className='relative size-10'>
          <CustomImage
            src={row.original.imageUrl}
            alt={`${row.original.fullName} profile picture`}
            className='rounded-full object-cover'
            fill
          />
        </div>

        <div className='flex flex-col'>
          <span>{row.original.fullName}</span>
          <span className='text-muted-foreground'>{row.original.id}</span>
        </div>
      </div>
    )
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='link'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='px-2 text-black [&_svg]:text-black'
        >
          Email
          <Icons.chevronUpDown className='ml-2 size-3' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='whitespace-nowrap px-2 lowercase'>
        {row.original.email}
      </div>
    ),
    meta: { breakpoint: 'md' }
  },
  {
    accessorKey: 'appointmentCount',
    header: ({ column }) => {
      return (
        <Button
          variant='link'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='px-0 text-black [&_svg]:text-black'
        >
          Number of appointments
          <Icons.chevronUpDown className='ml-2 size-3' />
        </Button>
      )
    },
    cell: ({ row }) => row.original.appointmentCount,
    meta: { breakpoint: 'md' }
  }
]

export const Patients = ({ users }: Props) => {
  return (
    <div>
      <DataTableLayout
        data={users}
        columns={columns}
        tableHeaderLabels={headerLabels}
        searchColumn='fullName'
      />
    </div>
  )
}
