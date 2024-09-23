import Image from 'next/image'
import React from 'react'

const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <div className='mx-auto max-w-max rounded-full border bg-sky-blue p-3'>
    <Image src={src} alt={alt} width={40} height={40} />
  </div>
)

export default Icon
