import { Icons } from '@/components/common/icons'
import { Metadata } from 'next'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
        <Icons.logo />
      </main>

      <footer className='row-start-3 flex flex-wrap items-center justify-center gap-6'>
        <Link
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/admin'
        >
          <Icons.dashboard />
          Docor space →
        </Link>

        <Link
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='/patient'
        >
          <Icons.dashboard />
          Patient space →
        </Link>
      </footer>
    </div>
  )
}
