

export default function Input({label,placeholder,onChange,type}) {
  return (
    <div className="">
      <div className='text-sm font-medium text-left py-2'>{label}</div>
      <input type={type} placeholder={placeholder} onChange={onChange} className='w-full  border text-black rounded-2xl p-2 mt-2 mb-2' />
    </div>
  )
}
