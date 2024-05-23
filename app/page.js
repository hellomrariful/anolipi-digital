import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Team from '@/components/Team';


export default function Home() {
  return (
    <div>


      <div className='hero'>
        <div className="mx-auto container">
          <Navbar />
          <Banner />
          <Team />
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
