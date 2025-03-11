'use client';

import Image from 'next/image';
import  {useRouter}  from 'next/navigation';


export default function Producto() {
  
  const router = useRouter();

  const handleNavigation = () => {
  router.push( `/producatalogo ` ); 
};

  return (
    <div id='productos' className='bg-gray-100'>
    
    </div>
  );
}
