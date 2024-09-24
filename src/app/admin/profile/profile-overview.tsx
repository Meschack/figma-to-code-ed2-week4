export function ViewProfile({
  toggleEditView
}: {
  toggleEditView: () => void
}) {
  return (
    <>
      <div>
        <div className='h-52 w-full rounded-tl-xl rounded-tr-xl bg-slate-200'></div>
        <div className='flex gap-8 rounded-bl-xl rounded-br-xl border-2 p-8'>
          <div className='size-32 -translate-y-3/4 rounded-full bg-white p-1 shadow-2xl'>
            <div className='h-full w-full rounded-full bg-slate-300'></div>
          </div>
          <div className='flex grow items-start justify-between'>
            <div className='flex flex-col items-start gap-4'>
              <h1>dr. Selena odette</h1>
              <p className='text-gray-400'>
                Specialist of skin surgery in Picko Clinic
              </p>
              <p className='rounded-full bg-slate-200 px-5 py-3 text-center font-semibold'>
                Semarang, Indonesia
              </p>
            </div>
            <button
              className='rounded-lg border px-3 py-2 font-semibold text-blue-500 focus:border-2'
              onClick={toggleEditView}
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>
      <div className='rounded-xl border-2 p-8'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          Profile Decription
        </h2>
        <p className='mt-6 text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim,
          dolorem, ex praesentium magnam distinctio deserunt rem doloremque non
          sapiente illo aspernatur quam maiores corporis.
          <br />
          <br />
          Veritatis eum ullam soluta, minima officia nostrum cum iure debitis
          minus earum? Quisquam inventore ullam ipsum ea quod maiores blanditiis
          nihil:
          <br />
          <br />- tempora officiis mollitia placeat dolorum dicta nemo deserunt,{' '}
          <br />
          - amet harum quia dolorem error quibusdam non aspernatur voluptatibus
          iste <br />
          - voluptatem ex, nemo consectetur quo ratione blanditiis voluptatibus
          iusto. <br />
        </p>
      </div>
    </>
  )
}
