import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      </Head>

      <div className="hero">
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

        <nav>
       
          {/* <div className='mr-3'>
        
          <Image 
          src="https://i.postimg.cc/XJqRdSJb/Onulipi-Icon-Black.png" 
        
          alt="Triangle Top" 
          width={50} 
          height={50} 
        />
          </div> */}
          <h1 className="font-semibold text-4xl">Anolipi<span className=' text-yellow-600'>.</span></h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
          <a href="/" className="btn">Get A Quote</a>
        </nav>

        <div className="row">
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
            <h1>
            Transforming Your <br /> <span>Vision</span> With Us!
            </h1>
            <p>We provide innovative digital marketing solutions designed to enhance your brand&apos;s presence and drive business growth. Partner with us to transform your vision into reality with tailored strategies and expert execution.</p>
            <a href="/" className="btn">Schedule A Meeting</a>
          </div>
        </div>
      </div>
    </div>
  );
}