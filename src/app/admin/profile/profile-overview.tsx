export function ProfileOverview() {
  return (
    <div>
      <div className='h-52 w-full rounded-tl-xl rounded-tr-xl bg-slate-200'>
        {/* <Image 
                src={}
                alt=""
                className="w-full h-full rounded-tl-xl rounded-tr-xl"/> */}
      </div>

      <div className='relative rounded-bl-xl rounded-br-xl border-2 p-8'>
        <div className='absolute -top-0 size-32 -translate-y-1/2 rounded-full bg-white p-1 shadow-2xl'>
          <div className='h-full w-full rounded-full bg-slate-300'></div>
        </div>

        <div className='ms-40 flex items-start justify-between'>
          <div className='flex flex-col items-start gap-4'>
            <h1>dr. Selena odette</h1>
            <p className='text-gray-400'>
              Specialist of skin surgery in Picko Clinic
            </p>
            <p className='rounded-full bg-slate-200 px-5 py-3 text-center font-semibold'>
              Semarang, Indonesia
            </p>
          </div>

          <button className='rounded-lg border px-3 py-2 font-semibold text-blue-500'>
            Edit profile
          </button>
        </div>
      </div>
    </div>
  )
}
