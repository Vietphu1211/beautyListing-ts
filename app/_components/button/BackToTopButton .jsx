import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { ArrowUpToLine } from 'lucide-react';

const BackToTopButton  = () => {
  // const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY  > 800 ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToDiv = (targetId) => {
    // Use document.getElementById to get the target element
    const targetElement = document.getElementById(targetId);

    // Check if the target element exists
    if (targetElement) {
      // Use targetElement.scrollIntoView({ behavior: 'smooth' }) to scroll to the element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  };

  return (
    <button
    className={`back-to-top-button ${showButton ? 'block' : 'hidden'} bg-secondary/70 w-10 h-10 fixed z-50 bottom-20 rounded-full `}
    onClick={() => handleScrollToDiv('topPage')} // Pass the target ID
  >
    <i className="fas fa-arrow-up"></i>
    <span className='text-white flex flex-row justify-center'> <ArrowUpToLine /></span>
  </button>
  )
}

export default BackToTopButton 