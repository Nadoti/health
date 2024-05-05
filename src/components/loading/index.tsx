"use client"
import { MutatingDots, ThreeDots } from "react-loader-spinner"



export function Loading() {
  
  return (
    <div className="absolute inset-0">
      <div className="w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
        <MutatingDots
          visible={true}
          height="120"
          width="120"
          color="rgb(94 234 212)"
          secondaryColor="rgb(190 242 100)"
          radius="16.5"
          ariaLabel="mutating-dots-loading"
        />
      </div>
    </div>
  )
}