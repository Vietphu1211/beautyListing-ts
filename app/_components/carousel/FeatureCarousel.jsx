import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


const CustomCarousel = ({
    key,
    src,
    alt,
    className
}) => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem key={key}>
                <Image
                        src={src}
                        alt={alt}
                        width={500}
                        height={350}
                        className={className}
                    />
                </CarouselItem>

            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}

export default CustomCarousel