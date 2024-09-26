'use client'

import { cn } from '@/lib/utils'
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
import { appointment_type } from '@prisma/client'
import { useState } from 'react'
import { Icons } from './common/icons'

interface Props {
  appointmentTypes: appointment_type[]
  current: string | undefined
  onChange: (value: string) => void
}

export const AppointmentTypeSelector = ({
  appointmentTypes,
  current,
  onChange
}: Props) => {
  const [open, setOpen] = useState(false)

  const selected = appointmentTypes.find(user => user.id === current)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full min-w-[300px] justify-between border-gray-400 bg-transparent text-gray-800 hover:border-muted-foreground hover:bg-white/75 hover:text-muted-foreground'
        >
          {selected?.name}
          <Icons.chevronDown
            className={cn(
              'ml-2 size-4 shrink-0 opacity-50',
              open && 'rotate-180'
            )}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-[300px] p-0'>
        <Command>
          <CommandList>
            <CommandGroup>
              {appointmentTypes.map(appointmentType => (
                <CommandItem
                  key={appointmentType.id}
                  value={appointmentType.id}
                  onSelect={currentValue => {
                    onChange(currentValue === current ? '' : currentValue)
                    setOpen(false)
                  }}
                  className='cursor-pointer'
                >
                  {appointmentType.name}

                  <Icons.check
                    className={cn(
                      'ml-auto size-4 text-gray-500',
                      current === appointmentType.id
                        ? 'opacity-100'
                        : 'opacity-0'
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
