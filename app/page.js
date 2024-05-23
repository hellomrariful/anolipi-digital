import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import Service from '@/components/Service';
import CTA from '@/components/CTA';
import Feedback from '@/components/Feedback';
import Map from '@/components/Map/Map';

export default function Home() {
  return (
    <div >


      <div className='hero'>
        <div className="mx-auto container">
          <Navbar />
          <Banner />
          <Service />
          <Team />
          <CTA />
          <Feedback />
          <Map />
        </div>
      </div>





      <Footer />
    </div>

  );
}

// <div className="hero2">
// <div className='mx-auto container'>
//   <Team />
// </div>
// </div>
