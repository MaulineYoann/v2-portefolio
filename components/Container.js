import Navbar from './Navbar';
import Footer from './Footer';

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
