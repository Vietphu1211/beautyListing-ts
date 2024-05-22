'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Modal from './Modal'
import { blogCategoryItem } from '@/app/_data/postCategoryItem'
import Link from 'next/link'

const CategoryModal = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleClose = useCallback(()=>{
        console.log('hello')
        setIsOpen(!isOpen)
    },[isOpen])

    const categorylist = blogCategoryItem
    const bodyContent = (
        <div>
            {categorylist.map((cate)=>(
                <div key={cate.id} >
                    <Link href={cate.slug}>{cate.nameOfCategory}</Link>
                </div>
            ))}
        </div>
    )
    const footerContent = (
        <div>
            <p>
                footer
            </p>
        </div>
    )
  return (
   <div>
   
    
    {isOpen && (
        <Modal
    title="Please, choose category which you want to read"
    body={bodyContent}
    footer={footerContent}
    onClick={handleClose}
     />
    )}
   
   </div>
  )
}

export default CategoryModal