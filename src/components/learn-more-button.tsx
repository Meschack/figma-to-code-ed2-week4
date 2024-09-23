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
