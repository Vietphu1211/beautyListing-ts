import { Button } from '@/components/ui/button'
import { CarouselItem } from '@/components/ui/carousel'
import { useToast } from "@/components/ui/use-toast"


import Image from 'next/image'
import React from 'react'

const ServiceCarouselItem = ({
    title,
    serviceId,
    src,
    priceOfService,
    timeOfService,
    descriptionOfService,
    handleClick

}) => {
    const { toast } = useToast()
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
                                    onClick={() => {
                                        toast({
                                            title: "Đã được thêm vào danh sách",
                                            description: "Friday, February 10, 2023 at 5:57 PM",
                                        })
                                    }}
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