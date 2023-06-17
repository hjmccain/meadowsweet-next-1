import classNames from "classnames";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactElement;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const [showNav, toggleNav] = useState(false);

  return (
    <div
      className={classNames(
        "absolute block md:p-4 w-full h-full bg-light-white mt-0 font-serif"
      )}>
      <>
        <div
          className={classNames(
            "flex fixed w-full z-30 -top-3 h-24 pt-3 bg-not-white -ml-4 pl-4 opacity-90"
          )}>
          <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
          <Link href="/">
            <Image
              src="/logo-pink.png"
              alt=""
              width={180}
              height={500}
              className={classNames(
                showNav ? "opacity-0" : "opacity-100",
                "fixed top-7 right-6 transition-opacity hover:brightness-95 h-auto w-auto"
              )}
            />
          </Link>
        </div>
        <div className={classNames("mx-auto transition-opacity p-4 mt-24")}>
          <h2
            className={classNames(
              "text-center text-7xl text-peach cursor-default"
            )}>
            {currentPage}
          </h2>
        </div>
        <div className="" id="content">
          {children}
        </div>
      </>
    </div>
  );
};

export default Layout;
