
import Nav from '@components/Navigation.js';
import Footer from '@components/Footer.js';
import "@/app/globals.css";
import "@/app/custom.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-white py-[30px] shadow-md">
        <Nav />
      </div>
      <main className='min-h-[600px] py-[30px]'>{children}</main>
      <div className='bg-gray-300 py-[30px] mb-0'>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;