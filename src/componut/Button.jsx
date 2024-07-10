

export default function Button({label,onClick}) {
  return (
    <button type="button" onClick={onClick} className="w-full text-white bg-gray-800  p-2 font-medium rounded-xl " >{label}</button>
  )
}
