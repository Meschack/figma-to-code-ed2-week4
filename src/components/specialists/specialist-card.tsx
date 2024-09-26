'use client'

import { FC } from 'react'
import Image from 'next/image'

type SpecialistCardProps = {
  name: string
  title: string
  imgSrc: string
}

const SpecialistCard: FC<SpecialistCardProps> = ({ name, title, imgSrc }) => (
  <div className='relative flex h-80 w-64 flex-col items-center justify-end overflow-hidden rounded-lg shadow-md lg:h-80 lg:w-72'>
    <Image src={imgSrc} alt={name} fill className='object-cover' />

    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

    <div className='relative z-10 p-4 text-center text-white'>
      <h4 className='text-lg font-semibold'>{name}</h4>
      <p className='text-sm'>{title}</p>
    </div>

    <div className='absolute right-4 top-4'>
      <Image
        src='/icons/linkedin-icon.svg'
        alt='LinkedIn Icon'
        width={30}
        height={30}
      />
    </div>
  </div>
)

export default SpecialistCard
