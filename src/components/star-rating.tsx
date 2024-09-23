import Image from 'next/image'
export const StarRating = ({ rating }: { rating: number }) => (
  <div className='flex items-center gap-1'>
    {Array(rating)
      .fill(0)
      .map((_, i) => (
        <Image
          key={i}
          className=''
          alt='Star'
          width={15}
          height={15}
          src='/icons/star.svg'
        />
      ))}
  </div>
)
