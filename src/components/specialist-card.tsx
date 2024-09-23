'use client';
import { FC } from 'react';
import Image from 'next/image';

type SpecialistCardProps = {
  name: string;
  title: string;
  imgSrc: string;
};

const SpecialistCard: FC<SpecialistCardProps> = ({ name, title, imgSrc }) => (
  <div className="relative flex flex-col items-center justify-end w-64 h-80 lg:w-72 lg:h-80 rounded-lg shadow-md overflow-hidden">
    <Image src={imgSrc} alt={name} layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="relative z-10 text-white p-4 text-center">
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-sm">{title}</p>
    </div>
    <div className="absolute top-4 right-4">
      <Image src="/icons/linkedin-icon.svg" alt="LinkedIn Icon" width={30} height={30} />
    </div>
  </div>
);

export default SpecialistCard;
