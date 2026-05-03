import Image from "next/image";
import Link from "next/link";

const shopLinks = ["New arrivals", "Best sellers", "Menswear", "Womenswear"];
const supportLinks = ["Contact", "Shipping", "Returns", "Size guide"];
const companyLinks = ["About Aura", "Careers", "Journal", "Stores"];

const Footer = () => {
  return (
    <footer className="bg-black px-5 py-12 font-primary text-white sm:px-8 lg:px-10">
      <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="relative block h-16 w-24 bg-white">
            <Image src="/aura-logo.png" alt="Aura Clothing" fill />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-white/65">
            Modern clothing for polished everyday dressing, built around
            effortless fits and seasonless essentials.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Shop
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              {supportLinks.map((link) => (
                <li key={link}>
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Aura Clothing. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="#">Instagram</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">TikTok</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
