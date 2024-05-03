import Heading from '../Heading'
import Container from '../Container'
import FeelbackCard from './FeelbackCard'
import Image from 'next/image'
import reviewGuest from '@/app/_data/reviewGuest'
import SlidingHandleButton from '../SlidingHandleButton'
import { useRef } from 'react'

const Feelback = () => {
    const reviewGuestList = reviewGuest;
    const listRef = useRef(null);
    const scrollLeftHandle = () => {
        if(listRef.current) {
            console.log('hello')
            listRef.current.scrollBy({
                left: -300,
                behavior:"smooth"
            })
        }
    }
    const scrollRightHandle = () =>{
        console.log('hello')

        if(listRef.current) {
            listRef.current.scrollBy({
                left:300,
                behavior:"smooth"
            })
        }
    }

    return (
        <Container>

            <Heading
                title="Testimonials"
                subtitle="Review of our users"
            />
            <div className='py-2' ref={listRef}>
                <div className='mt-20 mx-auto flex flex-row gap-5 overflow-auto overflow-y-hidden md:overflow-hidden  pt-16  '>
                    {reviewGuestList && reviewGuestList.map((reviews, index) => (
                        <FeelbackCard
                            key={index}
                            src={reviews.src}
                            bodyText={reviews.bodyText}
                            nameGuest={reviews.nameGuest}
                            score={reviews.score}
                        />
                    ))}
                </div>
            </div>
            <div className='my-10'>
                <SlidingHandleButton 
                    scrollLeftHandle={()=>scrollLeftHandle()}
                    scrollRightHandle={()=>scrollRightHandle()}

                />
            </div>

        </Container>
    )
}

export default Feelback