import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import Service from '@/components/Service';
import CTA from '@/components/CTA';
import Feedback from '@/components/Feedback';
import Map from '@/components/Map/Map';
import Impact from '@/components/Impact';
import WhyAnolipi from '@/components/WhyAnolipi';
import Expertise from '@/components/Expertise';
import Step from '@/components/Step';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <div>
      <div className='hero'>
        <div className="mx-auto container">
          <Navbar />
          <Banner></Banner>
          <Step />
          <Service />
          <Expertise />
          <WhyAnolipi />
          <Impact />
          <Team />
          <Feedback />
          <CTA />
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
}