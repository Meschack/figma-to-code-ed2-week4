import { Header } from '@/components/layout/client/header'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />

      {children}
    </>
  )
}

export default Layout
