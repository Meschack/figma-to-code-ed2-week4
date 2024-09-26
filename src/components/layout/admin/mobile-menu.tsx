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

interface Props {}

export const MobileMenu = ({}: Props) => {
  return (
    <Sheet>
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
        <SheetHeader className='px-4'>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <SidebarLinksList className='px-4' />
      </SheetContent>
    </Sheet>
  )
}
