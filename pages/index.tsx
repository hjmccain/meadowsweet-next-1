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
  content: Array<TextItem | null>;
}

export interface TextItem {
  h3: string | null;
  pre: Array<string>;
}

export interface List {
  title: string | null;
  content: Array<TextItem | null>;
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

  return content ? (
    <main
      className={classNames(
        "font-serif bg-not-white relative bg-fixed overflow-hidden h-screen md:p-4"
      )}>
      <div
        className={classNames(
          "opacity-[100%]",
          "flex fixed w-full z-40 -top-3 h-24 pt-3 bg-not-white -ml-4 pl-4 bg-opacity-90"
        )}>
        <Nav showNav={showNav} toggleNav={() => toggleNav(!showNav)} />
      </div>
      <div className={classNames("w-full absolute z-20 top-[32vh]")}>
        <div className="w-fit h-auto text-center mx-auto justify-self-center pb-8">
          <div>
            <Image
              src="/logo.png"
              alt=""
              width={1000}
              height={500}
              className="mx-auto h-auto w-auto"
            />
            <div className="flex flex-row justify-between ml-2 mr-16 text-3xl text-peach tracking-widest">
              <Link
                className="hover:text-pink-bright transition-colors"
                href={"/midwifery"}>
                midwifery
              </Link>
              <span className="mt-1">•</span>
              <Link
                className="hover:text-pink-bright transition-colors"
                href={"/abdominal-massage"}>
                abdominal massage
              </Link>
              <span className="mt-1">•</span>
              <Link
                className="hover:text-pink-bright transition-colors"
                href={"/ayurveda"}>
                ayurveda
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/floral.png"
        alt=""
        width={200}
        height={200}
        className={classNames(
          // entering ? "animate-fade-in" : "opacity-0",
          // entered && "opacity-[100%]",
          "h-auto w-auto mx-auto mb-8 absolute -bottom-6 left-0 right-0"
        )}
      />
    </main>
  ) : (
    <div>Loading</div>
  );
}
