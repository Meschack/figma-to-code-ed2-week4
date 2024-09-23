import Image from 'next/image';
import React from 'react'

const Icon = ({ src, alt }: { src: string, alt: string }) => (
    <div className="bg-sky-blue max-w-max rounded-full border p-3 mx-auto">
      <Image src={src} alt={alt} width={40} height={40} />
    </div>
  );

export default Icon
