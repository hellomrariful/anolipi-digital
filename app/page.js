import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';

import Image from 'next/image';

export default function Home() {
  return (
    <div className='hero'>
      <div className="mx-auto container">
        <Image
          src="https://i.postimg.cc/4x12v2cB/triangle-top.png"
          className="triangle1"
          alt="Triangle Top"
          width={300}
          height={300}
        />
        <Image
          src="https://i.postimg.cc/WpQyskj6/triangle-left.png"
          className="triangle2"
          alt="Triangle Left"
          width={300}
          height={300}
        />
        <Image
          src="https://i.postimg.cc/MZc4kDkp/circle.png"
          className="circle"
          alt="Circle"
          width={300}
          height={300}
        />

        <Navbar />
        <Banner />


      </div>
    </div>
  );
}