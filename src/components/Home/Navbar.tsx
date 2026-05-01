import Image from "next/image";
import { IoBagOutline,IoHeartOutline,IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const navList = [
  { label: "Home", link: "/home" },
  { label: "Shop", link: "/shop" },
  { label: "Products", link: "/products" },
  { label: "Contact", link: "/contact" },
];
const Navbar = () => {
  return (
    <div className=" font-primary w-full max-h-[12vh] px-10 py-2 flex justify-between items-center">

         {/* Logo */}
      <div className="relative w-26 h-20">
        <Image src={"/aura-logo.png"} fill alt="" />
      </div>

      {/* Navigations */}
      <nav className="hidden lg:block ">
        <ul className="flex gap-6 font-bold uppercase">
          {navList.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </nav>

     
      {/*  Icons   */}
      <div className="flex gap-4 lg:gap-6 items-center">
        <IoSearchOutline className="text-2xl" />
          <IoBagOutline className="text-2xl"/>
          <IoHeartOutline className="text-2xl" />
      
          <RxHamburgerMenu className="text-2xl lg:hidden " />
      </div>
    </div>
  );
};

export default Navbar;
