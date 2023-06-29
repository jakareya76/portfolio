import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 text-white">
      <div className=""></div>
      <div className="flex items-center justify-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};
export default Navbar;
