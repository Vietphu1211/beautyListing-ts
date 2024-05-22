import { useState, useEffect } from 'react';

function useScrollEffect(minThreshold = 0, maxThreshold) {
  const [isScrolled, setIsScrolled] = useState(false);
// tạo biến trạng thái cho scroll
const [disableScroll, setDisableScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
        if(disableScroll) return;

      const scrolling = window.scrollY; /**đặt biến scolling đại diện cho khoảng đường đi theo chiều dọc Y */
      setIsScrolled(scrolling > minThreshold);/** threshold là biến ngưỡng scroll để isScrolled = true và xảy ra hiệu ứng */
    
    if(scrolling >= maxThreshold) {
        setDisableScroll(true)
    } else {
        setDisableScroll(false)
    }

    }

    window.addEventListener('scroll', handleScroll);/** Đăng ký sự kiện scroll, khi trang được cuộn, hàm handleScroll sẽ được gọi. */
    return () => {
      window.removeEventListener('scroll', handleScroll);/** Trong hàm trả về của useEffect, chúng ta thực hiện việc gỡ bỏ sự kiện scroll khi component bị hủy. Điều này giúp tránh tình trạng "memory leak" và cải thiện hiệu suất của ứng dụng */
    };
  }, [minThreshold,maxThreshold, disableScroll]);

  return {isScrolled, disableScroll};
}

export default useScrollEffect;
