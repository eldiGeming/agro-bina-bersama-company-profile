import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import PartnershipFlow from "@/components/PartnershipFlow";
import LegalityCertification from "@/components/LegalityCertification";
import Gallery from "@/components/Gallery";
import OrganizationStructure from "@/components/OrganizationStructure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <LegalityCertification />
      <PartnershipFlow />
      <Gallery />
      <OrganizationStructure />
      <Footer />
    </>
  );
}
