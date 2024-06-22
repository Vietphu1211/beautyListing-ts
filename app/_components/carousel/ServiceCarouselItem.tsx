import { Button } from '@/components/ui/button'
import { CarouselItem } from '@/components/ui/carousel'


import Image from 'next/image'
import React from 'react'

interface ServiceCareouselItemProps {
    title: string
    serviceId: number
    src: string
    priceOfService: number
    timeOfService: number
    descriptionOfService?: string
    handleClick?: () => void
}


const ServiceCarouselItem:React.FC<ServiceCareouselItemProps> = ({
    
    title,
    serviceId,
    src,
    priceOfService,
    timeOfService,
    descriptionOfService,
    handleClick

}) => {
    return (
        <>
            <CarouselItem key={serviceId}

                className="md:basis-1/3 lg:basis-1/4 shadow-md">
                <div className='border-[1px] rounded-md'>
                    <div className="">
                        <div className="h-36 min-w-[50px] overflow-hidden">
                            <Image
                                src={src}
                                alt={title}
                                width={400}
                                height={400}
                                className="object-cover w-full"
                            />
                        </div>
                        <div className='flex flex-col justify-between  p-2'>
                            <div className="flex flex-row justify-between">
                                <p className="">{title}</p>
                                <p className="text-primary text-base font-medium">{priceOfService}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className='text-sm text-neutral-500 '>
                                    Thời gian:{timeOfService} Phút
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={handleClick}
                                >
                                    Chọn
                                </Button>
                            </div>
                        </div>
                    </div>
                    <p className="p-2">{descriptionOfService}</p>
                </div>

            </CarouselItem>
        </>
    )
}

export default ServiceCarouselItem