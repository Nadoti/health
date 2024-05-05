"use client"

import {  SelectHTMLAttributes, forwardRef } from "react";

interface OptionsProps {
  label: string;
  value: string;
}

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  watchValue?: string;
  options: OptionsProps[];
}

export const Select = forwardRef<HTMLSelectElement, InputProps>(({ watchValue, label, error, options, ...rest }, ref) => {
  return (
    <div className="containerInput">
      <div className={`contentInput ${watchValue || rest?.value ? "bg-gradient-primary" : error ? "bg-red-500" : "bg-zinc-600"}`}>
        <select
          id={rest.name}
          ref={ref}
          {...rest}
          className={`input  bg-zinc-800 ${watchValue ? "text-zinc-100" : error ? "text-red-500" : "text-zinc-500"}`}
        >
          <option value="" disabled selected>
            {label}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value} className="text-zinc-100">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  )
})

Select.displayName = 'Select'; 

