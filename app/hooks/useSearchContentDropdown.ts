import React, { useState } from 'react'

const useSearchContentDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropDownToggle = () => {
        setIsOpen(true)
    }
    const handleClose = ()=>{
        setIsOpen(false)
    }
  return {
    isOpen,
    dropDownToggle,
    handleClose
  }
}

export default useSearchContentDropdown