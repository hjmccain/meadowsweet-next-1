import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import { ContentSection } from ".";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.about },
  };
}

type AboutProps = { content?: ContentSection };

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Layout currentPage="about meadowsweet">
      <>
        <h1 className="text-green text-center text-[6.5rem] -mb-[50px] -mt-[24px] relative z-10 font-display drop-shadow-sm">
          about
        </h1>
        <div className="w-11/12 mx-auto drop-shadow mb-8">
          <Image
            src={"/images/placeholder3.jpg"}
            alt=""
            width={1000}
            height={500}
            className="mx-auto"
          />
        </div>
        <div className="mt-8 text-xl">
          <Paragraph
            title=""
            text={[
              {
                h3: null,
                pre: [
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.`,
                  `Consectetur libero — Id faucibus nisl tincidunt eget nullam.
            Quis viverra nibh cras pulvinar mattis nunc sed. Eu nisl nunc mi
            ipsum faucibus vitae aliquet nec ullamcorper. Pharetra diam sit
            amet nisl suscipit adipiscing bibendum est.`,
                ],
              },
            ]}
          />
        </div>
      </>
    </Layout>
  );
};

export default About;
