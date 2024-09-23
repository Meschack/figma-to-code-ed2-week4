<<<<<<< HEAD
import { Button } from './common/button'
import { Icons } from './common/icons'

export const LearnMoreButton = () => (
  <Button
    variant='link'
    className='gap-2 text-base text-black underline underline-offset-2'
  >
    <span>Learn more</span>
    <Icons.arrowRight className='size-5' />
  </Button>
)
=======
import Image from 'next/image'
import React from 'react'

const LearnMoreButton = () => (
  <p className='my-2 flex cursor-pointer items-center justify-center gap-2 font-medium underline'>
    Learn More
    <Image
      src='/icons/arrow-right.svg'
      alt='Arrow Right Icon'
      width={20}
      height={20}
    />
  </p>
)

export default LearnMoreButton
>>>>>>> 7ee8c05 (feat: complete initial version of landing page (non-responsive) ✅​)
