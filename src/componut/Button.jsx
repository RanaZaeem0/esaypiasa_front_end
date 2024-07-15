

export default function Button({label,onClick,type= 'button'}) {
  return (
    <button type={type} onClick={onClick} className="w-full text-white bg-gray-800  p-2 font-medium rounded-xl " >{label}</button>
  )
}
