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
    <div className="relative h-full overflow-hidden">
      <Image
        src="/images/Dwarf-Chryseis-Chryseis-Compacta.png"
        alt=""
        width={300}
        height={300}
        className={classNames(
          "-bottom-7",
          "mx-auto justify-self-start absolute -bottom-7 z-10 right-0 h-[400px] w-auto"
        )}
      />
      <Image
        src="/images/Dwarf-Chryseis-Chryseis-Compacta.png"
        alt=""
        width={300}
        height={300}
        className={classNames(
          "-bottom-7",
          "mx-auto justify-self-start absolute -bottom-7 z-10 left-0 h-[400px] w-auto scale-x-[-1]"
        )}
      />
      <div
        className={classNames(
          "md:p-4 w-full bg-[url('/images/bg-wave.png')] bg-cover bg-fixed transition-all duration-[3000ms] font-serif bg-not-white",
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
        <div className="relative">
          <Image
            src="/images/Dwarf-Chryseis-Chryseis-Compacta.png"
            alt=""
            width={200}
            height={200}
            className={classNames(
              // entering ? "animate-fade-in" : "opacity-0",
              // "opacity-[100%]",
              "relative top-[30px] left-0 right-0 h-auto w-auto mx-auto rotate-[275deg] z-30"
            )}
          />
          <div className="bg-light-white w-8/12 mx-auto px-12 pt-2 pb-8 mb-80 relative z-20 bg-opacity-90 drop-shadow-md -mt-36">
            <div className={classNames("mx-auto transition-opacity mt-8")}>
              <h2
                className={classNames(
                  "text-center text-7xl text-green cursor-default drop-shadow-sm"
                )}>
                welcome!
              </h2>
            </div>
            {children}
          </div>
        </div>

        <div className="w-full text-center mb-12">
          <Link
            className={classNames(
              "p-4 bg-green w-1/4 text-center text-2xl drop-shadow"
            )}
            href="">
            Contact Meadowsweet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
