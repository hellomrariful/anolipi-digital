import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Anolipi Digital LLC",
  description: "An all in one digital solution",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon']
  }
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-montserrat text-zinc-100"
        suppressHydrationWarning={true}>
        <div className='hero'> 
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
