import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div>
       <div className='hero'>
      <div className="mx-auto container">
        <Navbar />
        <Banner />
      </div>
    </div>
        <Footer />
    </div>
   
  );
}