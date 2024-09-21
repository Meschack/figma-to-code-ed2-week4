export default function LabelTextarea({
  label,
  name,
  placeholder,
  cols,
  rows
}: {
  label: string
  name: string
  placeholder?: string
  cols?: number
  rows?: number
}) {
  return (
    <div>
      <label htmlFor={name} className='font-semibold'>
        {label}
      </label>
      <textarea
        placeholder={placeholder || ''}
        name={name}
        id={'name'}
        cols={cols || 30}
        rows={rows || 10}
        className={
          'mt-2 w-full rounded-lg border p-3 placeholder:text-gray-400'
        }
      />
    </div>
  )
}
