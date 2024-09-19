import { AdminLayoutHeader } from '@/components/layout/admin/admin-layout-header'
import { Sidebar } from '@/components/layout/admin/sidebar'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <main className='h-screen'>
      <AdminLayoutHeader />

      <div className='flex'>
        <Sidebar />
        <main className='p-4 grow border-l-2'>{children}</main>
      </div>
    </main>
  )
}

export default Layout
