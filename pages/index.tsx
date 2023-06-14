import Nav from "@/components/Nav";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import Home from "./home";
import Link from "next/link";
import { getContent } from "@/lib/api";

interface IndexProps {
  content: Content;
}

interface Paragraph {
  title?: string;
  content: Array<string>;
}

interface List {
  title?: string;
  content: Array<string>;
}

interface Illustration {
  src?: string;
  width?: string;
  height?: string;
}

type Content = Record<
  string,
  {
    slug: string;
    paragraphs: Array<Paragraph>;
    lists: Array<List>;
    illustrations: Array<Illustration>;
  }
>;

function extractPreTagContent(htmlString: string) {
  const regex = /<pre[^>]*>(.*?)<\/pre>/g;
  const matches = htmlString.match(regex);

  if (matches) {
    const contentArray = matches.map((match) => {
      const contentRegex = /<pre[^>]*>(.*?)<\/pre>/;
      const matchResult = contentRegex.exec(match);
      return matchResult?.[1] || "";
    });
    return contentArray;
  }

  return [];
}

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content: Content = {};

  (() => {
    for (const idx in res.categories.nodes) {
      const obj = res.categories.nodes[idx];
      const wpContent = obj.posts.nodes;

      const sorted = wpContent.reduce(
        (acc: any, current: any, idx: any) => {
          return (() => {
            const tags = current.tags.nodes.map((obj: any) => obj.name);
            const regexTitle = /<h2[^>]*>(.*?)<\/h2>/;

            if (tags.includes("illustration")) {
              const regexSrc = /src="([^"]+)"/;
              const regexWidth = /width="([^"]+)"/;
              const regexHeight = /height="([^"]+)"/;

              const illustration: Illustration = {
                src: regexSrc.exec(current.content)?.[1],
                width: regexWidth.exec(current.content)?.[1],
                height: regexHeight.exec(current.content)?.[1],
              };
              acc["illustrations"].push(illustration);
            }

            if (tags.includes("paragraph")) {
              const paragraph: Paragraph = {
                title: regexTitle.exec(current.content)?.[1],
                content: extractPreTagContent(current.content),
              };
              acc["paragraphs"].push(paragraph);
            }

            if (tags.includes("list")) {
              const list: List = {
                title: regexTitle.exec(current.content)?.[1],
                content: extractPreTagContent(current.content),
              };
              acc["lists"].push(list);
            }

            return acc;
          })();
        },
        {
          illustrations: [],
          paragraphs: [],
          lists: [],
        }
      );

      content[obj.slug] = {
        slug: obj.slug,
        ...sorted,
      };
    }
  })();

  return {
    props: { content },
  };
}

export default function Index({ content }: IndexProps) {
  const setSessionValue = () => {
    if (typeof window !== "undefined") {
      const sessionValue = window.sessionStorage.getItem("entered");
      return sessionValue === "true";
    }
  };

  const [entered, setEntered] = useState(setSessionValue);
  const [entering, setEntering] = useState(false);
  const [showNav, toggleNav] = useState(false);

  const enter = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("entered", "true");
      setEntering(true);
    }
    setTimeout(() => {
      setEntered(setSessionValue);
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
          entered && "opacity-0",
          entering && "animate-fade-out",
          "mx-auto justify-self-start absolute bottom-0 z-10 right-0 left-0"
        )}
      />
      <div
        id="home"
        className={classNames(
          entering && "animate-grow",
          entered ? "mt-0" : "mt-[100%]",
          "absolute block md:p-4 w-full h-full bg-light-white"
        )}>
        <>
          <div
            className={classNames(
              entering ? "animate-fade-in" : "opacity-0",
              entered && "opacity-[100%]",
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
                  entering && "animate-fade-in",
                  entered && "opacity-[100%]",
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
                  entering && "animate-fade-in",
                  entered && !showNav && "opacity-[100%]",
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
      </div>
    </main>
  );
}
