import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const getEnumValuesLowercase = <T extends Record<string, string>>(
  enumObj: T
): Lowercase<T[keyof T]>[] => {
  return Object.values(enumObj).map(
    value => value.toLowerCase() as Lowercase<T[keyof T]>
  )
}
