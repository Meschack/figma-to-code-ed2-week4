'use client'

import { Label, Pie, PieChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { AppointmentStatus } from '@prisma/client'
import { ComponentProps, useMemo } from 'react'
import { cn } from '@/lib/utils'

export const description = 'A donut chart with text'

const chartConfig: Record<'count' | AppointmentStatus, ChartConfig[number]> = {
  count: { label: 'Count' },
  PENDING: { label: 'Pending', color: 'hsl(var(--appointment-pending))' },
  COMPLETED: { label: 'Completed', color: 'hsl(var(--appointment-completed))' },
  SCHEDULED: { label: 'Scheduled', color: 'hsl(var(--appointment-scheduled))' },
  CANCELLED: { label: 'Cancelled', color: 'hsl(var(--appointment-cancelled))' }
} satisfies ChartConfig

interface Props extends ComponentProps<'div'> {
  data: Array<{ status: string; count: number }>
}

export const AppointmentsStatistics = ({ data, className, ...rest }: Props) => {
  const totalCount = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <div
      className={cn('flex flex-col rounded-lg border p-4', className)}
      {...rest}
    >
      <header className='space-y-2'>
        <h3 className='font-semibold leading-none tracking-tight'>
          Appointments count by type
        </h3>

        <p className='text-sm text-muted-foreground'>January - June 2024</p>
      </header>

      <main className='flex flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={data}
              dataKey='count'
              nameKey='status'
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {totalCount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Count
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </main>

      <footer>
        <div
          className='mt-4 grid gap-2'
          style={{
            gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))`
          }}
        >
          {data.map(item => (
            <LegendItem
              key={item.status}
              status={item.status}
              count={item.count}
              color={chartConfig[item.status as AppointmentStatus].color}
              total={totalCount}
            />
          ))}
        </div>
      </footer>
    </div>
  )
}

interface LegendItemProps {
  status: string
  count: number
  color: string | undefined
  total: number
}

const LegendItem = ({ status, count, color, total }: LegendItemProps) => (
  <div className='flex flex-col gap-3'>
    <div className='size-4 rounded-full' style={{ backgroundColor: color }} />

    <span className='text-sm capitalize'>{status}</span>

    <span className='text-sm font-medium text-doctrin-neutral-primary'>
      {((count / total) * 100).toFixed(1)}%
    </span>
  </div>
)
