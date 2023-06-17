import Nav from "@/components/Nav";
import classNames from "classnames";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Home from "./home";
import Link from "next/link";
import parseContent from "@/lib/parseContent";
import { getContent } from "@/lib/api";

interface IndexProps {
  content: Content;
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

  // TO DO
  // Figure out positioning at short screen heights

  return (
    <main className="font-serif bg-not-white relative h-screen">
      <div
        className={classNames(
          entering && "animate-shrink",
          entered ? "-top-[50vh]" : "top-[20vh]",
          "w-full absolute z-10"
        )}>
        <div className="w-fit h-auto text-center mx-auto justify-self-center bg pb-8">
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
          entered && "opacity-0",
          entering && "animate-fade-out",
          "mx-auto justify-self-start absolute bottom-0 z-10 right-0 left-0 h-auto w-auto"
        )}
      />
      <div
        className={classNames(
          entering && "animate-grow",
          entered ? "mt-0" : "mt-[100%]",
          "absolute block md:p-4 w-full h-full bg-light-white"
        )}>
        <>
          <div
            className={classNames(
              entering ? "animate-fade-in" : "opacity-0",
              entered && "opacity-[90%]",
              "flex fixed w-full z-30 -top-3 h-24 pt-3 bg-not-white -ml-4 pl-4"
            )}>
            <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
            <Link href="/">
              <Image
                src="/logo-pink.png"
                alt=""
                width={180}
                height={500}
                className={classNames(
                  entering && "animate-fade-in",
                  entered && !showNav && "opacity-[100%]",
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
              welcome!
            </h2>
          </div>
          <div
            className={classNames(
              entering ? "animate-fade-in" : "opacity-0",
              entered && "opacity-[90%]"
            )}
            id="content">
            <Home content={content.philosophy} />
          </div>
        </>
      </div>
    </main>
  );
}
