import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 text-white">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/logo.png"
          width={66}
          height={66}
          className="object-cover"
        />
      </div>
      <div className="hidden md:flex items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="text-[24px] uppercase font-[300]">
            Home
          </Link>
        </div>
        <Link href="/work" className="text-[24px] uppercase font-[300]">
          Work
        </Link>
        <Link href="/about" className="text-[24px] uppercase font-[300]">
          About
        </Link>
      </div>

      <MobileMenu />
    </nav>
  );
};
export default Navbar;
