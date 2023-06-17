import CloseIcon from "@/public/icons/CloseIcon";
import MenuIcon from "@/public/icons/MenuIcon";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

interface NavProps {
  toggleNav: () => void; // () => toggleNav(!showNav)
  showNav: boolean;
}

const Nav: React.FC<NavProps> = ({ toggleNav, showNav }) => {
  return (
    <div className={classNames(showNav && "relative z-20", "flex w-full")}>
      <button className="ml-1" onClick={toggleNav}>
        {!showNav ? (
          <MenuIcon width={"50px"} color="#fb6eb4" />
        ) : (
          <CloseIcon width={"50px"} color="#fb6eb4" />
        )}
      </button>
      <nav
        className={classNames(
          showNav ? "opacity-100" : "opacity-0",
          "w-[100%] text-2xl grow flex items-center transition-opacity"
        )}>
        <Link
          className={classNames(
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-green text-black p-2 rounded-lg hover:brightness-90"
          )}
          href={showNav ? "/midwifery" : ""}>
          midwifery
        </Link>
        <Link
          className={classNames(
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-green text-black p-2 rounded-lg hover:brightness-90"
          )}
          href={showNav ? "/abdominal-massage" : ""}>
          abdominal massage
        </Link>
        <Link
          className={classNames(
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-green text-black p-2 rounded-lg hover:brightness-90"
          )}
          href={showNav ? "/ayurveda" : ""}>
          ayurveda
        </Link>
        <Link
          className={classNames(
            !showNav && "cursor-default",
            "w-1/4 inline-block text-center transition-all hover:tracking-widest hover:text-green text-black p-2 rounded-lg hover:brightness-90"
          )}
          href={showNav ? "/about" : ""}>
          about meadowsweet
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
