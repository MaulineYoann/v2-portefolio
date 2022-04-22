import Navbar from './Navbar';
import Footer from './Footer';

export default function Container({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
