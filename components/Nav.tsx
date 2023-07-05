import CloseIcon from "@/public/icons/CloseIcon";
import MenuIcon from "@/public/icons/MenuIcon";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

interface NavProps {
  toggleNav: () => void; // () => toggleNav(!showNav)
  showNav: boolean;
}

const Nav: React.FC<NavProps> = ({ toggleNav, showNav }) => {
  const pathName = usePathname();

  return (
    <div
      className={classNames(
        showNav && "relative z-20",
        "flex w-full drop-shadow-sm"
      )}>
      <button className="ml-1" onClick={toggleNav}>
        {!showNav ? (
          <MenuIcon width={"50px"} color="#ddd06a" />
        ) : (
          <CloseIcon width={"50px"} color="#ddd06a" />
        )}
      </button>
      <nav
        className={classNames(
          showNav ? "opacity-100" : "opacity-0",
          "w-[100%] text-2xl grow flex items-center transition-opacity"
        )}>
        <Link
          className={classNames(
            pathName === "/midwifery"
              ? "text-pink-bright cursor-default"
              : "hover:tracking-widest hover:text-pink-bright text-black",
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all p-2 rounded-lg"
          )}
          href={showNav ? "/midwifery" : ""}>
          midwifery
        </Link>
        <Link
          className={classNames(
            pathName === "/abdominal-massage"
              ? "text-pink-bright cursor-default"
              : "hover:tracking-widest hover:text-pink-bright text-black",
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-pink-bright text-black p-2 rounded-lg"
          )}
          href={showNav ? "/abdominal-massage" : ""}>
          abdominal massage
        </Link>
        <Link
          className={classNames(
            pathName === "/ayurveda"
              ? "text-pink-bright cursor-default"
              : "hover:tracking-widest hover:text-pink-bright text-black",
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-pink-bright text-black p-2 rounded-lg"
          )}
          href={showNav ? "/ayurveda" : ""}>
          ayurveda
        </Link>
        <Link
          className={classNames(
            pathName === "/about"
              ? "text-pink-bright cursor-default"
              : "hover:tracking-widest hover:text-pink-bright text-black",
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-pink-bright text-black p-2 rounded-lg"
          )}
          href={showNav ? "/about" : ""}>
          about meadowsweet
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
