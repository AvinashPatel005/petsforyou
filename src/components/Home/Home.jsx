import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import ProductSection from "./ProductSection";
import AdSection from "./AdSection";
import MembershipSection from "./MembershipSection";
import TeamSection from "./TeamSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProductSection />
      <AdSection />
      <MembershipSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default Home;
