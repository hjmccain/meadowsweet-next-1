import classNames from "classnames";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactElement;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const [showNav, toggleNav] = useState(false);
  const pathName = usePathname();

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={classNames(
          "md:p-4 w-full transition-all duration-[3000ms] font-serif bg-not-white min-h-screen",
          "bg-opacity-[100%]"
        )}>
        <div
          className={classNames(
            "opacity-[100%]",
            "flex fixed w-full z-40 -top-3 h-24 pt-3 bg-not-white -ml-4 pl-4 bg-opacity-90"
          )}>
          <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
          <Link href="/">
            <Image
              src="/logo.png"
              alt=""
              width={200}
              height={500}
              className={classNames(
                !showNav && "opacity-[100%]",
                showNav ? "opacity-0" : "opacity-100",
                "fixed top-4 right-4 transition-opacity hover:brightness-95 h-auto w-auto drop-shadow-sm"
              )}
            />
          </Link>
        </div>
        <div className="relative mt-28 w-8/12 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
