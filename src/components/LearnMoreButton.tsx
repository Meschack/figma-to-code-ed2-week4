import Image from 'next/image';
import React from 'react'

const LearnMoreButton = () => (
    <p className="font-medium flex justify-center items-center gap-2 underline cursor-pointer my-2">
      Learn More
      <Image src="/icons/arrow-right.svg" alt="Arrow Right Icon" width={20} height={20} />
    </p>
  );

export default LearnMoreButton
