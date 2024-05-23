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

        <nav className='flex items-center p-7'>
       
          {/* <div className='mr-3'>
        
          <Image 
          src="https://i.postimg.cc/XJqRdSJb/Onulipi-Icon-Black.png" 
        
          alt="Triangle Top" 
          width={50} 
          height={50} 
        />
          </div> */}
          <h1 className="font-semibold text-4xl">Anolipi<span className=' text-yellow-600'>.</span></h1>
          <ul className='flex-1 text-right'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
          <a href="/" className="btn">Get A Quote</a>
        </nav>

        <div className="flex  flex-wrap mt-20 justify-between">
          <div className="col-1">
            <Image 
              src="https://i.postimg.cc/15wjX33x/man.png" 
              alt="Man" 
              width={300} 
              height={300} 
            />
            <Image 
              src="https://i.postimg.cc/2SYXZN11/elements.png" 
              className="elements" 
              alt="Elements" 
              width={300} 
              height={300} 
            />
          </div>

          <div className="col-2">
            <h1 className='text-6xl font-bold'>
            Transforming Your <br /> <span className=' text-yellow-500'>Vision</span> With Us!
            </h1>
            <p className='w-[580px] mt-3 mb-7'>We provide innovative digital marketing solutions designed to enhance your brand&apos;s presence and drive business growth. Partner with us to transform your vision into reality with tailored strategies and expert execution.</p>
            <a href="/" className="btn">Schedule A Meeting</a>
          </div>
        </div>
      </div>
    </div>
  );
}