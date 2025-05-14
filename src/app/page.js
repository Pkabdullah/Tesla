import About from "@/components/About";
import BestSeller from "@/components/BestSeller";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Shop from "@/components/Shop";
import SubFooter from "@/components/SubFooter";


export default function Home() {
  return (
    <div className=" ">

      <Hero />
      <BestSeller />
      <About />
      <Shop />

    </div>
  );
}
