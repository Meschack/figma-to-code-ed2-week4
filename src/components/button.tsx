import Link from 'next/link'

interface ButtonProps {
  href: string
  text: string
}

const Button = ({ href, text }: ButtonProps) => {
  return (
    <Link href={href}>
      <button className='rounded-lg bg-primary-blue px-6 py-3 font-semibold text-white transition-all hover:bg-opacity-80'>
        {text}
      </button>
    </Link>
  )
}

export default Button
