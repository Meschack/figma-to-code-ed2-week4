import { AdminLayoutHeader } from '@/components/layout/admin/admin-layout-header'
import { Sidebar } from '@/components/layout/admin/sidebar'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar />

      <main className='flex w-full grow-0 flex-col'>
        <AdminLayoutHeader />

        <div className='scrollbar-hide w-full grow-0 overflow-scroll px-5 py-6 md:px-12 xl:px-6'>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
