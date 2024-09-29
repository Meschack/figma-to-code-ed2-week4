'use client'

import * as React from 'react'
import { cn, getEnumValuesLowercase } from '@/lib/utils'
import { Button } from '@/components/common/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Icons } from '../common/icons'
import { AppointmentStatus } from '@prisma/client'

const statuses = getEnumValuesLowercase(AppointmentStatus)

export type AppointmentStatusParam = keyof typeof statuses | 'all'

interface Props {
  current: string | undefined
  onChange: (value: AppointmentStatusParam) => void
}

export const AppointmentStatusFilter = ({ current, onChange }: Props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between capitalize md:w-fit md:min-w-[200px]'
        >
          {current === ''
            ? 'Select a status...'
            : current === 'all'
              ? 'All statuses'
              : statuses.find(framework => framework === current)}

          <Icons.chevronUpDown className='ml-2 size-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>

      <PopoverContent align='end' className='w-full min-w-[200px] p-0 md:w-fit'>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem
                value='all'
                onSelect={currentValue => {
                  onChange(
                    currentValue === current
                      ? 'all'
                      : (currentValue as AppointmentStatusParam)
                  )
                  setOpen(false)
                }}
                className='cursor-pointer'
              >
                All statuses
                <Icons.check
                  className={cn(
                    'ml-auto size-4',
                    current === 'all' ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>

              {statuses.map(category => (
                <CommandItem
                  key={category}
                  value={category}
                  onSelect={currentValue => {
                    onChange(
                      currentValue === current
                        ? 'all'
                        : (currentValue as AppointmentStatusParam)
                    )
                    setOpen(false)
                  }}
                  className='cursor-pointer capitalize'
                >
                  {category}
                  <Icons.check
                    className={cn(
                      'ml-auto size-4',
                      current === category ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
