import Layout from "@/components/Layout";
import { ContentSection } from ".";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import List from "@/components/List";
import Flower from "@/public/icons/Flower";
import Link from "next/link";
import classNames from "classnames";

type HomeProps = { content?: ContentSection };

const Home: React.FC<HomeProps> = ({ content }) => {
  console.log({ content });
  const image1 = content?.illustrations[0] || null;

  return (
    <>
      {image1?.src && (
        <div className="pt-8 drop-shadow">
          <Image
            src={image1.src}
            alt=""
            width={1000}
            height={500}
            className="mx-auto"
          />
        </div>
      )}
      <div className="bg-green/20 p-4 pr-6 mt-8">
        <Paragraph
          text={content?.paragraphs[0]?.content}
          title={content?.paragraphs[0]?.title}
        />
      </div>
      {/* <Image
        src="/images/flower-hands.png"
        alt=""
        width={200}
        height={200}
        className={classNames(
          // entering ? "animate-fade-in" : "opacity-0",
          // entered && "opacity-[100%]",
          "h-auto w-auto mx-auto mb-8"
        )}
      /> */}
      <div className="flex justify-center w-full -mt-12">
        {/* <Flower width={"150px"} /> */}
        <Image
          src="/images/meadowsweet-cleaned-kinda.png"
          alt=""
          width={200}
          height={200}
          className={classNames(
            // entering ? "animate-fade-in" : "opacity-0",
            // entered && "opacity-[100%]",
            "-rotate-[15deg]"
          )}
        />
      </div>
      {/* <h4 className="mb-4 p-4 -mt-2 border-green border text-2xl bg-pink-light text-center drop-shadow">
        Learn more about our offerings…
      </h4> */}
      <nav className={"flex justify-around w-full mb-4 pt-4 transition-colors"}>
        <Link
          className={
            "text-black text-2xl hover:text-pink-bright drop-shadow-sm bg-green hover:bg-light-white px-4 py-1 rounded-sm"
          }
          href={"/midwifery"}>
          midwifery
        </Link>
        <Link
          className={
            "text-black text-2xl hover:text-pink-bright drop-shadow-sm bg-green hover:bg-light-white px-4 py-1 rounded-sm"
          }
          href={"/abdominal-massage"}>
          abdominal massage
        </Link>
        <Link
          className={
            "text-black text-2xl hover:text-pink-bright drop-shadow-sm bg-green hover:bg-light-white px-4 py-1 rounded-sm"
          }
          href={"/ayurveda"}>
          ayurveda
        </Link>
      </nav>
      {/* <div className="flex justify-center w-full mb-4 bg-green/20 p-2 pt-4">
        <Flower width={"100px"} />
        <Flower width={"100px"} />
        <Flower width={"100px"} />
      </div> */}
    </>
  );
};

export default Home;
