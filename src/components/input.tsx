import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
    return (
        <input 
            className="h-10 rounded-md bg-gray-100 border-gray-300 border transition-colors duration-400 text-xs px-3 focus:border-orange-400 outline-none" 
            type="text" 
            {...props} 
        />
    );
}
