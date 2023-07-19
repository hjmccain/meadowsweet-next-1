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
          "md:p-4 md:pb-24 w-full transition-all duration-[3000ms] font-serif bg-gradient-to-t from-1% from-peach/30 to-light-white to-70% min-h-screen",
          "bg-opacity-[100%]"
        )}>
        <div
          className={classNames(
            "opacity-[100%]",
            "flex fixed w-full z-40 -top-3 h-24 pt-3 bg-light-white -ml-4 pl-4 bg-opacity-90"
          )}>
          <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
          <Link className="" href="/">
            <Image
              src="/logo-green.png"
              alt=""
              width={190}
              height={500}
              className={classNames(
                !showNav && "opacity-[100%]",
                showNav ? "opacity-0" : "opacity-100",
                "fixed top-4 right-4 transition-opacity hover:brightness-95 h-auto w-auto drop-shadow-sm"
              )}
            />
          </Link>
        </div>
        <div className="relative w-8/12 mx-auto bg-not-white py-4 px-8 rounded-3xl drop-shadow-md mt-[370px]">
          {/*mt-28 */}
          <Image
            src="/images/floral.png"
            alt=""
            width={200}
            height={200}
            className={classNames(
              // entering ? "animate-fade-in" : "opacity-0",
              // entered && "opacity-[100%]",
              "h-auto w-auto mx-auto mb-8 absolute -top-[305px] left-0 right-0"
            )}
          />
          {children}
        </div>
      </div>
      <div className="w-full bg-not-white p-8 text-center font-serif">
        123 west pine st • phippsburg, me •{" "}
        <span className="underline">207 555 5555</span> •{" "}
        <span className="underline">hello@meadowsweet.com</span>
      </div>
    </div>
  );
};

export default Layout;
