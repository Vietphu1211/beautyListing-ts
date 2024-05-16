import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export function OrderBy() {
  return (
    <Select>
    <SelectTrigger className="w-[130px]">
      <SelectValue className="text-sm" placeholder="Sắp xếp theo:" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Sắp xếp theo</SelectLabel>
        <SelectItem value="apple">Đánh giá từ cao nhất</SelectItem>
        <SelectItem value="banana">Giá tốt nhất</SelectItem>
        <SelectItem value="blueberry">Giá cao nhất</SelectItem>
        <SelectItem value="grapes">Khu vực gần đây</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  
  )
}
