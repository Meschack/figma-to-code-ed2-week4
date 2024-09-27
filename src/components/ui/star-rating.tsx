import { Icons } from '../common/icons'
export const StarRating = ({ rating }: { rating: number }) => (
  <div className='flex items-center gap-1'>
    {Array(rating)
      .fill(0)
      .map((_, i) => (
        <Icons.star className='size-4' key={i} />
      ))}
  </div>
)
