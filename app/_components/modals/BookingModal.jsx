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
import { CalendarDays, Clock } from "lucide-react"
import { useEffect, useState } from "react"



const BookingModal = () => {

  const [date, setDate] = useState(new Date())
  const [timeSlot, setTimeSlot] = useState()

  const [selectedTimeSlot, setSelectedTimeSlot] = useState()


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
return (
    <Drawer>
      <DrawerTrigger>Đặt lịch hẹn</DrawerTrigger>
      <div className="w-6/12">
        <DrawerContent>
          {/* Modal header */}
          <DrawerHeader>
            <DrawerTitle>Đặt lịch hẹn</DrawerTitle>
            <DrawerDescription>
              <p>
                Chọn thời gian và dịch vụ
              </p>
            </DrawerDescription>
          </DrawerHeader>
          {/* Modal body*/}
          <div className="grid grid-cols-1 md:grid-cols-2 w-6/12 mx-auto gap-10">
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
          </div>

          {/* Modal footer */}
          <DrawerFooter>
            <Button 
            type='button'
            disabled={!(date&&selectedTimeSlot)}
            >Chấp Nhận</Button>
            <DrawerClose>
              <Button variant="outline">Hủy bỏ</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>

  )
}

export default BookingModal