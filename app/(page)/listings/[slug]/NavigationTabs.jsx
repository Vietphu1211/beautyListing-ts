import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const tabData = [
    {
        title: "Vị trí",
        anchorId: "vi-tri"
    },
    {
        title: "Dịch vụ",
        anchorId: "dich-vu"
    },
    {
        title: "Giờ mở cửa",
        anchorId: "gio-mo-cua"
    },
    {
        title: "Đánh giá",
        anchorId: "danh-gia"
    },
    {
        title: "Cửa hàng khác",
        anchorId: "cua-hang-khac"
    },
]



const NavigationTabs = () => {
    const [selectedTab, setSelectedTab] = useState([]);

    // Khi click vào tabs cập nhật event theo id của div
    const handleClick = (e) => {
        setSelectedTab(e.target.id)
        // console.log(selectedTab,'hellop')
        // return selectedTab
    }



    return (
        
            <div className=' flex flex-row justify-center items-center gap-2 overflow-x-auto
                 '>
                {
                    tabData?.map((tab) => (

                        <Link
                            id={tab.anchorId}
                            key={tab.anchorId}
                            onClick={(e) => handleClick(e)}
                            href={`/listing/apha#anchor-${tab.anchorId}`}
                            //  href={`/listing/${listingId}#anchor-${tab.anchorId}
                            className={`flex flex-col justify-center items-center min-w-[120px] h-12 w-15 px-2  duration-50
            ${selectedTab === tab.anchorId ? "text-white bg-primary rounded-sm border-primary " : "text-neutral-200 bg-neutral-800  "}
            ${selectedTab === tab.anchorId ? " shadow-lg" : ""}
            `}>
                            <p>
                                {tab.title}
                            </p>
                        </Link>
                    ))
                }
            </div>
        
    )
}

export default NavigationTabs