'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const description = 'A bar chart with a label'

const chartConfig = {
  count: {
    label: 'Count',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig

interface Props extends ComponentProps<'div'> {
  chartData: Array<{ month: string; count: number }>
}

export const AppointmentsMontlyStatistics = ({
  chartData,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={cn('col-span-3 space-y-5 rounded-lg border p-4', className)}
      {...rest}
    >
      <header className='space-y-2'>
        <h3 className='font-semibold leading-none tracking-tight'>
          Appointments monthly statistics
        </h3>

        <p className='text-sm text-muted-foreground'>
          {chartData[0].month} - {chartData[chartData.length - 1].month}
        </p>
      </header>

      <main>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, left: 0 }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />

            <YAxis
              dataKey='count'
              tickLine={false}
              axisLine={{
                stroke: 'var(--doctrin-light-blue)',
                strokeWidth: 1.5
              }}
              tick
              tickMargin={0}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Bar
              dataKey='count'
              fill='var(--doctrin-blue)'
              maxBarSize={40}
              radius={8}
            >
              <LabelList
                position='top'
                offset={12}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </main>
    </div>
  )
}
