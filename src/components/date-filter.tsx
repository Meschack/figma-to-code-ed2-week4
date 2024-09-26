'use client'

import { format } from 'date-fns'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { ComponentProps, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './common/button'
import { Icons } from './common/icons'
import { Calendar } from './ui/calendar'

interface Props extends ComponentProps<'div'> {
  onDateRangeChange?: (date: DateRange | undefined) => void
}

export const DateFilter = ({
  className,
  onDateRangeChange,
  ...rest
}: Props) => {
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <div className={cn('grid gap-2', className)} {...rest}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-fit justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <Icons.calendar className='mr-2 size-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            className='rounded bg-white p-2'
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={value => {
              setDate(value)
              onDateRangeChange?.(value)
            }}
            toDate={new Date()}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
