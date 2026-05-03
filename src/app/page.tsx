import Category from "@/components/Home/Category";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Newsletter from "@/components/Home/Newsletter";
import Product from "@/components/Home/Product";
import TopBar from "@/components/Home/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Product />
      <Category />
      <Newsletter />
      <Footer />
    </>
  );
}
