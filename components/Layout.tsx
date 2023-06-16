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
            "flex fixed w-full z-30 -top-3 h-24 pt-3 bg-light-white -ml-4 pl-4"
          )}>
          <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
          <div
            className={classNames(
              showNav ? "opacity-0" : "opacity-100",
              "mx-auto absolute top-3 left-[38%] transition-opacity"
            )}>
            <h2
              className={classNames(
                "mx-8 mb-8 mt-4 text-center text-5xl text-green cursor-default"
              )}>
              {currentPage}
            </h2>
          </div>
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
        <div id="content">{children}</div>
      </>
    </div>
  );
};

export default Layout;
