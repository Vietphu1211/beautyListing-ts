import React from 'react'

const HeadingSkeleton = () => {
    return (
        <div role='status' className='max-w-sm animate-pulse'>
            <div className='h-2.5 w-48 bg-gray-200 rounded-full dark:bg-gray-700'></div>

        </div>
    )
}

export default HeadingSkeleton