import { InputHTMLAttributes, forwardRef, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  watchValue?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ watchValue, label, error, ...rest }, ref) => {
 
  return (
    <div className="containerInput">
      <div className={`contentInput ${error ? "bg-red-500" : watchValue || rest?.value ? "bg-gradient-primary" : "bg-zinc-600"}`}>
        <input
          id={rest.name}
          ref={ref}
          placeholder={label}
          {...rest}
          className={`input bg-zinc-800 ${watchValue ? "text-zinc-100" : error ? "text-red-500" : "text-zinc-500"}`}
        />
        <label className={`label ${error ? "text-red-500" : "text-zinc-500"}`} htmlFor={rest.name}>{label}</label>
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  )
})

Input.displayName = 'Input'; 