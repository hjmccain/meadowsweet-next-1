import CloseIcon from "@/public/icons/CloseIcon";
import MenuIcon from "@/public/icons/MenuIcon";
import Link from "next/link";
import Image from "next/image";

interface NavProps {
  toggleNav: () => void; // () => toggleNav(!showNav)
  showNav: boolean;
}

const Nav: React.FC<NavProps> = ({ toggleNav, showNav }) => {
  return (
    <div className="flex">
      <button className="ml-1" onClick={toggleNav}>
        {!showNav ? (
          <MenuIcon width={"50px"} color="#fb6eb4" />
        ) : (
          <CloseIcon width={"50px"} color="#fb6eb4" />
        )}
      </button>
      {showNav && (
        <nav className="w-[100%] text-2xl grow flex items-center">
          <Link
            className="w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-pink-bright text-black p-2 rounded-lg"
            href="">
            midwifery
          </Link>
          <Link
            className="w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-pink-bright text-black p-2 rounded-lg"
            href="">
            abdominal massage
          </Link>
          <Link
            className="w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-pink-bright text-black p-2 rounded-lg"
            href="">
            ayurveda
          </Link>
          <Link
            className="w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-pink-bright text-black p-2 rounded-lg"
            href="">
            about meadowsweet
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Nav;
