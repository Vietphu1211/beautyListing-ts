import React, { useState } from 'react'

const tabsData = [
    {
        title: "Vị trí",
        anchorId:"vi-tri"
    },
    {
        title: "Mô tả",
        anchorId:"mo-ta"

    },
    {
        title: "Dịch vụ",
        anchorId:"dich-vu"
    },
    {
        title: "Giờ mở cửa",
        anchorId:"gio-mo-cua"
    },
    {
        title: "Đánh giá",
        anchorId:"danh-gia"
    },
    {
        title: "Xem tiệm khác",
        anchorId:"xem-tiem-khac"
    },
]


const DetailBusinessTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index:number) =>{
        setActiveTab(index)
    }

    // smooth scrolling to anchor position
    
  return (
    <div>
    <ul className='flex flex-row gap-1'>
        {tabsData.map((tab,index)=> (
            <li key={index}>
                <button
                onClick={()=>handleTabClick(index)}
                >{tab.title}</button>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default DetailBusinessTab