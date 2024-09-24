import { Metadata } from 'next'
import { ProfileOverview } from './profile-overview'

export const metadata: Metadata = {
  title: 'Doctor profile'
}

export default function DoctorProfilePage() {
  return (
    <div className='mx-auto flex max-w-5xl flex-col gap-5'>
      <ProfileOverview />

      <div className='rounded-xl border-2 p-8'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          Profile Decription
        </h2>
        <p className='whitespace-wrap mt-6 text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim,
          dolorem, ex praesentium magnam distinctio deserunt rem doloremque non
          sapiente illo aspernatur quam maiores corporis.
          <br />
          <br />
          Veritatis eum ullam soluta, minima officia nostrum cum iure debitis
          minus earum? Quisquam inventore ullam ipsum ea quod maiores blanditiis
          nihil:
          <br />
          <br />
          - tempora officiis mollitia placeat dolorum dicta nemo deserunt,{' '}
          <br />
          - amet harum quia dolorem error quibusdam non aspernatur voluptatibus
          iste <br />
          - voluptatem ex, nemo consectetur quo ratione blanditiis voluptatibus
          iusto. <br />
        </p>
      </div>
    </div>
  )
}
