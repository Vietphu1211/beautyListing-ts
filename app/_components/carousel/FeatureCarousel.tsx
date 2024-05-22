import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


interface CustomCarouselProps {
    key:string,
    src:string,
    alt:string,
}

const CustomCarousel:React.FC<CustomCarouselProps> = ({
    key,
    src,
    alt,
}) => {
    return (
        <Carousel >
            <CarouselContent>
                <CarouselItem key={key}>
                <Image
                        src={src}
                        alt={alt}
                        width={500}
                        height={350}
                        className="w-12/12 "
                    />
    
                    
                </CarouselItem>
                <CarouselItem key={key} >
                <Image
                        src={src}
                        alt={alt}
                        width={500}
                        height={350}
                        className="w-full"
                    />
                    
                </CarouselItem>
                <CarouselItem key={key} >
                <Image
                        src={src}
                        alt={alt}
                        width={500}
                        height={350}
                        className="w-full"
                    />
                    
                </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CustomCarousel