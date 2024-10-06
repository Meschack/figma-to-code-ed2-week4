'use client'

import { Button } from '@/components/common/button'
import { Icons } from '@/components/common/icons'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { SidebarLinksList } from './sidebar-links-list'
import { useState } from 'react'
import Link from 'next/link'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (value: boolean) => setIsOpen(value)

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          className='xl:hidden [&_path]:hover:fill-white'
          size='icon'
        >
          <Icons.menu />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side='left' className='flex flex-col gap-5 px-0'>
        <SheetHeader className=''>
          <SheetTitle>
            <Link href='/'>
              <Icons.logo />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <SidebarLinksList onLinkClick={() => toggle(false)} className='px-4' />
      </SheetContent>
    </Sheet>
  )
}
