import { Metadata } from 'next'
import { Profile } from './profile'

export const metadata: Metadata = {
  title: 'Doctor profile'
}

export default function DoctorProfilePage() {
  return (
    <div className='mx-auto flex max-w-5xl flex-col gap-5 text-blue-950'>
      <Profile />
    </div>
  )
}
