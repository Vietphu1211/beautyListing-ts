
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { locationdata } from "../_data/locationdata"
  

const CarouselComponent = () => {
  const getLocationdata = locationdata

  return (
    <Carousel>
  <CarouselContent>
    
  <>
  {getLocationdata && getLocationdata.map((location)=> (
      

      <CarouselItem key={location.locationId}>
     
    <p>{location.locationTile}</p>
    <Image
    src={location.img}
    alt={location.locationTile}
    width={200}
    height={200}
    className="object-cover"
     />

    </CarouselItem>
    ))
    }
  </>
    
   
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default CarouselComponent