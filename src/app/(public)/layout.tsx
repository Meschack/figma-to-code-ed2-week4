import { Header } from '@/components/layout/client/header'
import { auth } from '@clerk/nextjs/server'
import { PropsWithChildren } from 'react'

const Layout = async ({ children }: PropsWithChildren) => {
  const userId = auth().userId
  const doctorId = process.env.DOCTOR_CLERK_ID

  return (
    <div className='space-y-10 pt-10'>
      <Header isAdmin={userId === doctorId} />

      {children}
    </div>
  )
}

export default Layout
