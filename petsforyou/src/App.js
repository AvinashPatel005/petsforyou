import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap-icons/font/bootstrap-icons.css";
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import ProductSection from './components/ProductSection';
import AdSection from './components/AdSection';
import MembershipSection from './components/MembershipSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ServiceSection/>
    <ProductSection/>
    <AdSection/>
    <MembershipSection/>
    <TeamSection/>
    <BlogSection/>
    <ContactSection/>
    <Footer/>
    </>
  );
}

export default App;
