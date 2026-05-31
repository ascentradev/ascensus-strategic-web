import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './styles/inicio.css';
import './styles/servicios.css';
import './styles/quienes-somos.css';

export default function App() {
  return (
    <>
      <div id="scroll-progress"></div>
      <div className="hero-line"></div>
      <div className="scroll-dot" id="scrollDot"></div>
      <Nav />
      <Outlet />
      <Footer />
      <ContactModal />
    </>
  );
}
