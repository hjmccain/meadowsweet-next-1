import Nav from "@/components/Nav";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import Home from "./home";
import Link from "next/link";

export default function Index() {
  const [entered, setEntered] = useState(false);
  const [homeView, setHomeView] = useState(false);
  const [showNav, toggleNav] = useState(false);

  const enter = () => {
    setEntered(true);
  };

  // TO DO
  // Figure out positioning at short screen heights

  return (
    <main className="font-serif bg-not-white relative h-screen">
      <div
        className={classNames(
          entered ? "animate-shrink" : "top-[20vh]",
          "w-full absolute z-10"
        )}>
        <div className="w-fit text-center mx-auto justify-self-center bg pb-8">
          <div>
            <Image
              src="/logo.png"
              alt=""
              width={1000}
              height={500}
              className="mx-auto"
            />
            <div className="flex flex-row justify-between ml-2 mr-16 text-3xl text-green tracking-widest">
              <h2 className="">midwifery</h2>
              <span className="mt-1">•</span>
              <h2 className="">abdominal massage</h2>
              <span className="mt-1">•</span>
              <h2 className="">ayurveda</h2>
            </div>
          </div>
          <button className="pt-24" onClick={enter}>
            <h2 className="text-6xl text-peach hover:tracking-widest transition-all">
              e n t e r
            </h2>
          </button>
        </div>
      </div>
      <Image
        src="/images/floral.png"
        alt=""
        width={500}
        height={500}
        className={classNames(
          entered ? "animate-side-slide" : "right-0 left-0",
          "mx-auto justify-self-start absolute bottom-0 z-10"
        )}
      />
      <div
        id="home"
        className={classNames(
          entered
            ? "block animate-grow md:p-4 w-full h-full bg-light-white"
            : "top-[100vh]",
          "absolute"
        )}>
        {entered && (
          <>
            <div
              className={classNames(
                entered &&
                  "flex fixed w-full z-30 -top-3 h-24 pt-3 bg-light-white -ml-4 pl-4",
                entered && "animate-fade-in"
              )}>
              <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
              <div
                className={classNames(
                  showNav ? "opacity-0" : "opacity-100",
                  "mx-auto absolute top-3 left-[38%] transition-opacity"
                )}>
                <h2
                  className={classNames(
                    entered && "animate-fade-in",
                    "mx-8 mb-8 mt-4 text-center text-5xl text-green cursor-default"
                  )}>
                  midwifery
                </h2>
              </div>
              <Link href="/midwifery">
                <Image
                  src="/logo-pink.png"
                  alt=""
                  width={180}
                  height={500}
                  className={classNames(
                    entered && "animate-fade-in",
                    showNav ? "opacity-0" : "opacity-100",
                    "fixed top-7 right-6 transition-opacity hover:brightness-95"
                  )}
                />
              </Link>
            </div>
            <div id="content">
              <Home />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
