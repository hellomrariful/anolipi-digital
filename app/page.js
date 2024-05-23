import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';

import Image from 'next/image';

export default function Home() {
  return (
    <div className='hero'>
      <div className="mx-auto container">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}