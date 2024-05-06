import React from 'react'

const SearchContentDropdown = ({
    dropdownContent
}) => {
  return (
    <div className='bg-white flex flex-row justify-center items-start mt-4 w-full md:w-[60%] lg:w-[70%]'>{dropdownContent}</div>
  )
}

export default SearchContentDropdown