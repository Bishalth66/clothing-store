import Image from "next/image";
import Link from "next/link";
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
    <div className=" font-primary w-full max-h-[10vh] px-10 py-3 flex justify-between items-center shadow-sm">
         {/* Logo */}
      <Link href={'/'} className="relative w-18 h-16 lg:w-26 lg:h-20">
        <Image src={"/aura-logo.png"} fill alt="" />
      </Link>

      {/* Navigations */}
      <nav className="hidden lg:block ">
        <ul className="flex gap-6 ">
          {navList.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </nav>

     
      {/*  Icons   */}
      <div className="flex gap-4 lg:gap-6 items-center text-2xl">
        <IoSearchOutline  />
          <IoBagOutline />
          <IoHeartOutline />
          <RxHamburgerMenu className="lg:hidden " />
      </div>
    </div>
  );
};

export default Navbar;
