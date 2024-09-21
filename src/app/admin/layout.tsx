import { AdminLayoutHeader } from '@/components/layout/admin/admin-layout-header'
import { Sidebar } from '@/components/layout/admin/sidebar'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <main className='h-screen overflow-y-hidden'>
      <AdminLayoutHeader />

      <div className='flex h-full'>
        <Sidebar />

        <main className='mb-32 grow overflow-y-auto border-l-2 p-4'>
          {children}
        </main>
      </div>
    </main>
  )
}

export default Layout
