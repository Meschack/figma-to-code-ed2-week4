export default function LabelInput({
  label,
  inputType,
  name,
  placeholder
}: {
  label: string
  inputType?: string
  name: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className='font-semibold'>
        {label}
      </label>
      <input
        type={inputType ? inputType : 'text'}
        placeholder={placeholder || ''}
        name={name}
        className={
          'mt-2 w-full rounded-lg border p-3 placeholder:text-gray-400'
        }
      />
    </div>
  )
}
