'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

export default function ToBack() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-5 left-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all z-50"
    >
      <FaArrowLeft className="text-xl" />
    </button>
  );
}