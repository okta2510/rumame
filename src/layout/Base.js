
import Nav from '@components/Navigation.js';
import "../app/globals.css";
import "../app/custom.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-white py-[30px] shadow-md mb-10">
        <Nav />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;