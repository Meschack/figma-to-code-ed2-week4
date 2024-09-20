import { Header } from '@/components/layout/client/header'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='space-y-10 pt-10'>
      <Header />

      {children}
    </div>
  )
}

export default Layout
