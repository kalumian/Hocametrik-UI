import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}