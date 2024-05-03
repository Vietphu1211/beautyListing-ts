'use client'
import React, { Suspense, useCallback, useEffect, useState } from 'react'


const Loading = () => {
    // const [isLoading,setIsLoading] = useState(true)
    
    // useEffect(()=> {
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     },500)
    // },[])
    
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white'>

    
         <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"><circle cx={12} cy={2} r={0} fill="#228077"><animate attributeName="r" begin={0} calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#228077" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.087s" calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#228077" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.175s" calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#228077" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.262s" calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#228077" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.35s" calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#228077" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.438s" calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#228077" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.525s" calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx={12} cy={2} r={0} fill="#228077" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.612s" calcMode="spline" dur="0.7s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle></svg>
        </div>
        </div>
    
  )
}

export default Loading