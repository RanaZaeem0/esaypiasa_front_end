import React, { forwardRef, useId } from "react"



const Input = React.forwardRef(function Input({
  label,
  placeholder,
  type='text',
  ...props},ref) {
const id = useId()
  return (

<div className=""           >
      <label  htmlFor={id} className='text-sm font-medium text-left py-2'>{label}</label>
      <input type={type}  placeholder={placeholder} {...props} className='w-full  border text-black rounded-2xl p-2 mt-2 mb-2' ref={ref} id={id}  />
    </div>
  )
})
export default Input

// import React,{useId} from "react";



// const Input  =React.forwardRef(function Input({
//     label,
//     type = 'text',
//     className ='',
//     ...props 
// }, ref){


//     const id =  useId()
// return(
//     <div className="w-full">
//         {
//             label && <label
//             className='inline-block mb-1 pl-1'
//             htmlFor={id}
//             >{label}</label>
//         }
//         <input type={type}
//         className={`${className}
//         px-3 py-2 rounded-md bg-shite text-black outline-none focus:bg-gray-50 duration-200
//          border-gray-400 w-full
//         `}
      
//         ref={ref}
//         {...props}
//         id={id}
//          />
//     </div>
// )

// })

// export default Input;