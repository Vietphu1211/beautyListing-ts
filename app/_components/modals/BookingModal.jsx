import { DatePicker } from "@/app/(page)/[listings]/DatePicker"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ArrowDownRight, CalendarDays, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import ServiceCarouselItem from "../carousel/ServiceCarouselItem"
import { serviceData } from "@/app/_data/serviceData"
import { CarouselItem } from "@/components/ui/carousel"


const STEPS = {
  SERVICE: 0,
  DATE: 1,
  TIME: 2,
  CONFIRM:3,
}


const BookingModal = () => {
  const serviceDateJson = serviceData;

  const [date, setDate] = useState(new Date())
  const [timeSlot, setTimeSlot] = useState()

  const [selectedTimeSlot, setSelectedTimeSlot] = useState()

  // Chức năng điều hướng content hiển thị theo từng step của modal
  const [currentStep, setCurrentStep] = useState(STEPS.SERVICE)
  const renderStepContent = (step) => {
    switch (step) {
      case STEPS.SERVICE:
        return <ServiceStep/>;
      case STEPS.DATE:
        return <DateStep />;
      case STEPS.TIME:
        return <TimeStep />;
      case STEPS.CONFIRM:
        return <ConfirmStep/>

      default:
        return null;
    }
  };
const handleSubmit = () => {
  // đẩy dữ liệu lên Server, có thể dùng axios.post('api/listings',data)
  console.log('Dữ liệu chuẩn bị gửi đi')
}
  const handleNext = () => {
    if(currentStep < STEPS.CONFIRM)
      {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if(currentStep > STEPS.SERVICE) {
      setCurrentStep(currentStep - 1);
    }
  }




  useEffect(() => {
    getTime();
  }, [])

  // tạo mảng thời gian cách nhau 30 phút sử dụng vòng lặp for
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }

    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }

    setTimeSlot(timeList)
    console.log(timeList)
  }

  // chỉ định những ngày trước ngày hiện tại(ngày trong quá khứ) sẽ bị disabled
  const isPastDay = (previousDay)=>{
    let now = new Date();
    return previousDay <= new Date(now.getTime() - 24*60*60*1000);
    // lấy thời gian hiện tại trừ đi 24 giờ
}  


const ServiceStep = ()=> (
  <>
    <h2>Hãy chọn dịch vụ có trong danh sách dưới đây</h2>
    {serviceDateJson?.map((service) => (
                        <div key={service.serviceId}
                        
                        className="flex flex-row justify-between">
                          <h3>{service.title}
                          <span className="text-neutral-500 text-sm"> {service.priceOfService}</span>
                          </h3>
                          <div className="flex flex-row gap-2 "><Button variant="outline">+</Button>
                          <Button variant="outline">-</Button></div>

                        </div>


                    ))}
  </>
)


const DateStep = () => (
  
        <>
              {/* calendar */}
              <div className="flex flex-row justify-end">
            <div className="flex flex-col justify-start items-baseline">
               <h3 className="flex gap-2 items-center">
                 <CalendarDays className="text-primary h-5 w-5 my-3" />
                 Chọn ngày
               </h3>
               <Calendar
                 mode="single"
                 selected={date}
                 onSelect={setDate}
                 disabled={isPastDay}
                 className="rounded-md border"
               />
             </div>
            </div>
        </>
)

const TimeStep = () => (
  <>
    {/* Time list */}
    <div className="mt-3 ">
              <h2 className="flex gap-2 items-center mb-3">
                <Clock className="text-primary h-5 w-5" />
                Chọn khoảng thời gian

              </h2>
              <div className="grid grid-cols-3 gap-2 border rounded-lg p-2 text-center ">
                {timeSlot?.map((item, index) => (
                  <h2
                    onClick={()=>setSelectedTimeSlot(item.time)}
                    className={`p-2 border rounded-full text-center hover:bg-primary hover:text-white cursor-pointer
                    ${selectedTimeSlot === item.time && 'bg-primary text-white'}
                    `}
                    key={index}>
                    {item.time}
                  </h2>
                ))}
              </div>
            </div>
  </>
)

const ConfirmStep = () => (
  <>
    <p>Xin cám ơn! Bạn đã đặt lịch hẹn với thông tin sau</p>
    <p>Cửa hàng:</p>
    <p>Ngày</p>
    <p>Giờ</p>
    <p>Dịch vụ</p>

  </>
)
return (
    <Drawer>
      <DrawerTrigger>Đặt lịch hẹn </DrawerTrigger>
      <div className="w-12/12">
        <DrawerContent>
          {/* Modal header */}
          <DrawerHeader>
            <DrawerTitle> Đặt lịch hẹn </DrawerTitle>
            <DrawerDescription>
              <p>
                Chọn thời gian và dịch vụ
              </p>
            </DrawerDescription>
          </DrawerHeader>


          {/* Modal body*/}
          <div className="grid grid-cols-1 md:grid-cols-2 w-6/12 mx-auto gap-10">
            
            {/* dùng hàm renderStepContent và truyền vào thông số currentStep để render component tương ứng */}
            {renderStepContent(currentStep)}
          </div>
          
          
          {/* Modal footer */}
          <DrawerFooter className="flex flex-row justify-center items-center">
          <Button 
          variant="outline"
          type='button'
          disabled={currentStep === STEPS.SERVICE}
          onClick={handleBack}
          className="flex-auto md:flex-none"
          >
          Lùi lại
          </Button>
          {
            currentStep < STEPS.CONFIRM ? (
            <Button 
            type='button'
            // disabled={currentStep === STEPS.SERVICE}
            onClick={handleNext}
          className="flex-auto md:flex-none"

            >{currentStep === STEPS.TIME ? 'Đặt lịch hẹn' : 'Tiep tuc'}
            </Button>
            ) : 
            (
<DrawerClose className=" border border-neutral-200 py-[8px] rounded-sm flex-auto md:flex-none">
            Thoát
            </DrawerClose>
            )
          }

            
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>

  )
}

export default BookingModal