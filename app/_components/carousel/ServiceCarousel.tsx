'use client'
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image"
import SearchForm from "../search/SearchForm"
import { serviceData } from "@/app/_data/serviceData"
import ServiceCarouselItem from "./ServiceCarouselItem"
import { useState } from "react"

import { useToast } from "@/components/ui/use-toast"


const ServiceCarousel = () => {

    const serviceDateJson = serviceData;

    // const { toast } = useToast()
    
    return (
        <>
            <div className='flex flex-row justify-end w-10/12 mx-auto h-8 mb-4
                    md:6/12
                    
                    '>
                <SearchForm
                    placeholder='tìm kiếm dịch vụ'
                    onChange={() => { }}
                    defaultValue={""}
                    onClick={() => { }}
                    onBlur={() => { }}
                />
            </div>
            <Carousel>
                <CarouselContent>
                    {/* render danh mục dịch vụ của một business tại đây, mỗi carouselitem là 1 dịch vụ , đặt key ở mỗi CarouselItem*/}
                    {serviceDateJson?.map((service) => (
                        <ServiceCarouselItem
                            key={service.serviceId}
                            title={service.title}
                            serviceId={service.serviceId}
                            src={service.src}
                            priceOfService={service.priceOfService}
                            timeOfService={service.timeOfService}
                            // descriptionOfService={service.descriptionOfService}
                            // handleClick={(service)=>handleClick(service)}

                        />


                    ))}
                    

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* <p 
            className=" mt-4">Xem thêm</p> */}
           
        </>
    )
}

export default ServiceCarousel