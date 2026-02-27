'use client'
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px' }
    );
    observer.observe(footer);
    return () => observer.disconnect();
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
          className="fixed z-50 bottom-0 left-0 ml-4 bg-green-500 p-3 shadow-lg hover:bg-stone-800 transition-all flex items-center justify-center"
          style={{ width: '45px', height: '45px' }}
        >
          <FaArrowUp className="text-white text-lg" />
        </button>
      )}
    </div>
  );
}
