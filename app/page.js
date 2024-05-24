import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import Service from '@/components/Service';
import CTA from '@/components/CTA';
import Feedback from '@/components/Feedback';
import Map from '@/components/Map/Map';
import Impact from '@/components/Impact';
import WhyAnolipi from '@/components/WhyAnolipi';
import Expertise from '@/components/Expertise';

export default function Home() {
  return (
    <div >
{/* area of expertise ek pase with image, er arekpase why choose anolipi */}

      <div className='hero'>
        <div className="mx-auto container">
          <Navbar />
          <Banner />
          <Service />
          <WhyAnolipi />
          <Expertise />
          <Team />
          <CTA />
          <Feedback />
          <Impact />
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
