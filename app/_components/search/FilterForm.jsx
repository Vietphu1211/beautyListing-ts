import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Search,X  } from 'lucide-react';


// làm chức năng debounce thủ công


const FilterForm = (props) => {
    FilterForm.prototype = {
        onsubmit: PropTypes.func,
    }
    FilterForm.defaultProps = {
        onSubmit: null,
    }

    const { onSubmit,dropDownToggle,handleClose } = props;
    

    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null); 

    const handleSearchChange = (e) => {
        const inputedValue = e.target.value
        setSearchTerm(inputedValue)
        
        if (!onSubmit) return;/**Nếu onSubmit là null hoặc undefine thì return */
        
        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(()=> {
            
            const formValues = {
                searchTerm:inputedValue,
            }
            onSubmit(formValues)

        },1000)

    }
    
    return (
       <>
        <div className='flex flex-row justify-start items-center w-full py-2 px-1'>
                            {!searchTerm ? (
                                <Search />
                            ) : 
                            (<X className='cursor-pointer'
                                onClick={()=>setSearchTerm('')}
                            />)
                             }

         <form className='w-full'>
            <input
                className="w-full focus:outline-none px-2 py-auto text-sm"
                type='text'
                placeholder="Gõ danh mục cần tìm kiếm. Vd: cắt tóc nam, làm nail, massage chân"
                value={searchTerm}
                onChange={handleSearchChange}
                onClick={dropDownToggle}
                onBlur={handleClose}
            />
        </form>
       </div>
       
       </>
    )
}

export default FilterForm