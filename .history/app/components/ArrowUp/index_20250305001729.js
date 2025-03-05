'use client'
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-0 right-0 mb-4 mr-4 bg-black p-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center"
          style={{ width: '45px', height: '45px' }}
        >
          <FaArrowUp className="text-white text-lg" />
        </button>
      )}
    </div>
  );
}