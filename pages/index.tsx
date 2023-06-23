import Nav from "@/components/Nav";
import classNames from "classnames";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Home from "./home";
import Link from "next/link";
import parseContent from "@/lib/parseContent";
import { getContent } from "@/lib/api";

interface IndexProps {
  content?: Content;
}

export interface Paragraph {
  title: string | null;
  content: Array<string | null>;
}

export interface ListItem {
  h3: string;
  pre: string;
}

export interface List {
  title: string | null;
  content: Array<ListItem | null>;
}

export interface Illustration {
  src: string | null;
  width: string | null;
  height: string | null;
}

export interface ContentSection {
  paragraphs: Array<Paragraph>;
  lists: Array<List>;
  illustrations: Array<Illustration>;
}

export type Content = Record<string, ContentSection>;

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content },
  };
}

const useLocalStorage = (
  key: string,
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedValue = window.sessionStorage.getItem(key);

    if (storedValue !== null) {
      setValue(storedValue);
    } else {
      setValue(initialValue);
    }

    setInitialized(true);
  }, [key, initialValue]);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, initialized]);

  return [value, setValue];
};

export default function Index({ content }: IndexProps) {
  const [visited, setVisted] = useLocalStorage("entered", "false");
  const [entering, setEntering] = useState(false);
  const [showNav, toggleNav] = useState(false);
  const entered = visited === "true";

  console.log({ content });

  const enter = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("entered", "true");
      setEntering(true);
    }
    setTimeout(() => {
      setVisted("true");
      setEntering(false);
    }, 3000);
  };

  return content ? (
    <main
      className={classNames(
        "font-serif bg-not-white relative bg-fixed overflow-hidden",
        entered ? "h-auto" : "h-screen",
        entering && "h-screen"
      )}>
      <div
        className={classNames(
          entering && "animate-shrink",
          entered ? "-top-[60vh]" : "top-[20vh]",
          "w-full absolute z-20"
        )}>
        <div className="w-fit h-auto text-center mx-auto justify-self-center pb-8">
          <div>
            <Image
              src="/logo.png"
              alt=""
              width={1000}
              height={500}
              className="mx-auto h-auto w-auto"
            />
            <div className="flex flex-row justify-between ml-2 mr-16 text-3xl text-green tracking-widest">
              <h2 className="">midwifery</h2>
              <span className="mt-1">•</span>
              <h2 className="">abdominal massage</h2>
              <span className="mt-1">•</span>
              <h2 className="">ayurveda</h2>
            </div>
          </div>
          <button
            className="mt-32 px-24 pb-6 pt-4 bg-not-white bg-opacity-90"
            onClick={enter}>
            <h2 className="text-6xl text-peach hover:tracking-widest transition-all">
              e n t e r
            </h2>
          </button>
        </div>
      </div>
      <Image
        src="/images/Dwarf-Chryseis-Chryseis-Compacta.png"
        alt=""
        width={300}
        height={300}
        className={classNames(
          entered && "-bottom-7",
          entering && "animate-down right-0",
          "mx-auto justify-self-start absolute -bottom-7 z-10 right-0 h-[400px] w-auto"
        )}
      />
      <Image
        src="/images/Dwarf-Chryseis-Chryseis-Compacta.png"
        // src="/images/meadowsweet-cleaned-kinda-2.png"
        alt=""
        width={300}
        height={300}
        className={classNames(
          entered && "-bottom-7",
          entering && "animate-down left-0",
          "mx-auto justify-self-start absolute -bottom-7 z-10 left-0 h-[400px] w-auto scale-x-[-1]"
          // "mx-auto justify-self-start absolute bottom-0 z-10 left-5 h-[380px] w-auto"
        )}
      />
      <div
        className={classNames(
          entering && "animate-grow",
          entered ? "mt-0" : "mt-[100%] absolute",
          "block w-full"
        )}>
        <div
          className={classNames(
            "md:p-4 w-full bg-[url('/images/bg-wave.png')] bg-cover bg-fixed transition-all duration-[3000ms]",
            entering ? "bg-opacity-100" : "bg-opacity-0",
            entered && "bg-opacity-[100%]"
          )}>
          <div
            className={classNames(
              entering ? "animate-fade-in" : "opacity-0",
              entered && "opacity-[100%]",
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
                  entering && "animate-fade-in",
                  entered && !showNav && "opacity-[100%]",
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
                // entered && "opacity-[100%]",
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
              <Home content={content.philosophy} />
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
    </main>
  ) : (
    <div>Loading</div>
  );
}
