import { getEnumValuesLowercase } from '@/lib/utils'
import { AppointmentStatus } from '@prisma/client'
import { createSearchParamsCache, parseAsStringEnum } from 'nuqs/server'

export const searchParamsCache = createSearchParamsCache({
  status: parseAsStringEnum([
    ...getEnumValuesLowercase(AppointmentStatus),
    'all'
  ]).withDefault('all')
})
