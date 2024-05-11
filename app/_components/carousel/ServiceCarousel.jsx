import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const ServiceCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                {/* render danh mục dịch vụ của một business tại đây, mỗi carouselitem là 1 dịch vụ */}
                <CarouselItem className="md:basis-1/3 lg:basis-1/4 shadow-md">
                    <div className='border-[1px] rounded-md'>
                        <div className="">
                            <div className="h-36 min-w-[50px] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1630843599725-32ead7671867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfDB8MHx8fDA%3D"
                                    alt="service pic"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className='flex flex-col justify-between border-b-[1px] p-2'>
                                <div className="flex flex-row justify-between">
                                <p className="">Regular cut </p>
                                    <p className="text-primary text-base font-medium">$35.00</p>
                                </div>
                                <div className="block">
                                    <p className='text-sm text-neutral-500 '>
                                        Thời gian:25 Phút
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="p-2">Dịch vụ gel nail tại sunnay nail room với thời gian thực hiện 25 phút, đắp bột thay móng, sơn màu</p>
                    </div>

                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4 shadow-md">
                    <div className='border-[1px] rounded-md'>
                        <div className="">
                            <div className="h-36 min-w-[50px] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1630843599725-32ead7671867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfDB8MHx8fDA%3D"
                                    alt="service pic"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className='flex flex-col justify-between border-b-[1px] p-2'>
                                <div className="flex flex-row justify-between">
                                <p className="">Regular cut </p>
                                    <p className="text-primary text-base font-medium">$35.00</p>
                                </div>
                                <div className="block">
                                    <p className='text-sm text-neutral-500 '>
                                        Thời gian:25 Phút
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="p-2">Dịch vụ gel nail tại sunnay nail room với thời gian thực hiện 25 phút, đắp bột thay móng, sơn màu</p>
                    </div>

                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4 shadow-md">
                    <div className='border-[1px] rounded-md'>
                        <div className="">
                            <div className="h-36 min-w-[50px] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1630843599725-32ead7671867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfDB8MHx8fDA%3D"
                                    alt="service pic"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className='flex flex-col justify-between border-b-[1px] p-2'>
                                <div className="flex flex-row justify-between">
                                <p className="">Regular cut </p>
                                    <p className="text-primary text-base font-medium">$35.00</p>
                                </div>
                                <div className="block">
                                    <p className='text-sm text-neutral-500 '>
                                        Thời gian:25 Phút
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="p-2">Dịch vụ gel nail tại sunnay nail room với thời gian thực hiện 25 phút, đắp bột thay móng, sơn màu</p>
                    </div>

                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4 shadow-md">
                    <div className='border-[1px] rounded-md'>
                        <div className="">
                            <div className="h-36 min-w-[50px] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1630843599725-32ead7671867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfDB8MHx8fDA%3D"
                                    alt="service pic"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className='flex flex-col justify-between border-b-[1px] p-2'>
                                <div className="flex flex-row justify-between">
                                <p className="">Regular cut </p>
                                    <p className="text-primary text-base font-medium">$35.00</p>
                                </div>
                                <div className="block">
                                    <p className='text-sm text-neutral-500 '>
                                        Thời gian:25 Phút
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="p-2">Dịch vụ gel nail tại sunnay nail room với thời gian thực hiện 25 phút, đắp bột thay móng, sơn màu</p>
                    </div>

                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4 shadow-md">
                    <div className='border-[1px] rounded-md'>
                        <div className="">
                            <div className="h-36 min-w-[50px] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1630843599725-32ead7671867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbHxlbnwwfDB8MHx8fDA%3D"
                                    alt="service pic"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className='flex flex-col justify-between border-b-[1px] p-2'>
                                <div className="flex flex-row justify-between">
                                <p className="">Regular cut </p>
                                    <p className="text-primary text-base font-medium">$35.00</p>
                                </div>
                                <div className="block">
                                    <p className='text-sm text-neutral-500 '>
                                        Thời gian:25 Phút
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="p-2">Dịch vụ gel nail tại sunnay nail room với thời gian thực hiện 25 phút, đắp bột thay móng, sơn màu</p>
                    </div>

                </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ServiceCarousel