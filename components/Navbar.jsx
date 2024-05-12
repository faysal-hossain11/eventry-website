
import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";
import Logo from "../public/images/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-[#171049]">
      <div className="container flex justify-between items-center py-6 ">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src={Logo}
              alt="Eventry"
              width={135}
              height={135} />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li><SignInOut /></li>
          <Link href="#" className="text-white"><li>About</li></Link>
          <Link href="#" className="text-white"><li>Contact Us</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
