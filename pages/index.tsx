import Nav from "@/components/Nav";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [homeView, setHomeView] = useState(false);
  const [showNav, toggleNav] = useState(false);

  const enter = () => {
    setEntered(true);
  };

  console.log({ entered });

  // TO DO
  // On enter, load/unhide homepage component & begin setTimeoutFn
  // Trigger scrollTo event
  // After scrollTo event, use onscrollend to hide landing page so that user can't scroll back up & fade in nav menu
  // Backup for most browsers (only Chrome & Firefox support onscrollend) — timeout fn

  // RE DO
  // Animate changes in absolute positioning instead! No scrolling

  return (
    <main className="font-serif bg-not-white relative h-screen">
      <div
        className={classNames(
          entered ? "animate-shrink" : "z-10 top-[20vh]",
          "w-full absolute"
        )}>
        <div className="w-fit text-center mx-auto justify-self-center">
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
        className="mx-auto justify-self-start absolute z-20 bottom-0 right-0 left-0"
      />
      <div
        id="home"
        className={classNames(
          entered ? "block animate-grow md:p-4" : "top-[100vh]",
          "absolute"
        )}>
        {entered && (
          <>
            <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
            <div id="content"></div>
          </>
        )}
      </div>
    </main>
  );
}
