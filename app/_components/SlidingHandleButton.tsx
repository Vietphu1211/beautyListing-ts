import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'


const SlidingHandleButton = ({
    scrollLeftHandle,
    scrollRightHandle,
  
}) => {
  
  return (
    <div className={`flex flex-row gap-3 justify-end items-center z-20
    `}>
          
                <ArrowLeftCircle 
                     className='hidden md:block text-neutral-700 cursor-pointer hover:text-primary'
                    onClick={scrollLeftHandle}
                />
                <ArrowRightCircle 
                    className=' hidden md:block  text-neutral-700 cursor-pointer hover:text-primary'
                    onClick={scrollRightHandle}
                />
          </div>
  )
}

export default SlidingHandleButton