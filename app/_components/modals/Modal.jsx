import React from 'react'
import ThemeButton from '../ThemeButton'

const Modal = ({
    title,
    modalHandleClose,
    body,
    footer,
}) => {
    return (
        <div className='
    flex flex-row justify-center items-center
    overflow-x-hidden overflow-y-auto 
    bg-neutral-800/70 fixed inset-0 z-50 
    outline-none
    focus:outline-none
    '>
            <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto '>
                {/* content */}
                <div className='bg-white relative translate duration-300 h-full rounded-lg '>
                    <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none'>
                        {/* header */}
                        <div className='relative flex justify-start items-center p-6 rounded-t border-b-[1px]'>
                            {/* buton for closing modals */}
                            <button 
                            onClick={modalHandleClose}
                            className='flex-none'
                            > 
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="black" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"></path></svg>
                            </button>
                            <div className='text-lg font-semibold flex-auto text-center'>
                            {title}
                            </div>
                        </div>
                        {/* body */}
                        <div className='relative p-6 flex-auto'>
                            {body}
                        </div>
                        {/* footer */}
                        <div className='flex flex-col gap-2 p-6'>
                            <div className='flex flex-row items-center gap-4 w-full'>
                               {footer}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal