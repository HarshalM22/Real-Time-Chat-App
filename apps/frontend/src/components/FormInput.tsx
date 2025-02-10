import { ReactElement } from "react"

interface FormInputProps{
    name : string
    value:string 
    type : string
    label : string
    icon? : ReactElement
    showPassword? : boolean
    onTogglePassword? :()=>void 
}

export function FormInput ({type,label,showPassword,onTogglePassword}:FormInputProps) {
    return (
  <div className="relative">
    <input
       type={type}
       placeholder={label}
         className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-800 text-lg placeholder:text-gray-500
                 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      
      />
    {/* {Icon && (
      <button type="button" onClick={onTogglePassword} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>)} */}
    
  </div>
)
}