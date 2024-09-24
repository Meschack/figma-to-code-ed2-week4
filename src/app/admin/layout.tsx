import { AdminLayoutHeader } from '@/components/layout/admin/admin-layout-header'
import { Sidebar } from '@/components/layout/admin/sidebar'
import { auth } from '@clerk/nextjs/server'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  const userId = auth().userId

  const doctorId = process.env.DOCTOR_CLERK_ID

  return (
    <main className='h-screen'>
      <AdminLayoutHeader isAdmin={userId === doctorId} />

      <div className='flex min-h-full grow'>
        <Sidebar />

        <main className='grow overflow-y-auto border-l-2 p-4'>{children}</main>
      </div>
    </main>
  )
}

export default Layout
