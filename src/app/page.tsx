import Category from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
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
    </>
  );
}
