import Layout from "@/components/Layout";
import { ContentSection } from ".";
import ContentPage from "./contentPage";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";
import Paragraph from "@/components/Paragraph";
import List from "@/components/List";
import Image from "next/image";
import ExpandableMenu from "@/components/ExpandableMenu";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.ayurveda },
  };
}

type AyurvedaProps = { content?: ContentSection };

const Ayurveda: React.FC<AyurvedaProps> = ({ content }) => {
  console.log({ content });
  const image1 = content?.illustrations[0] || null;

  const items = [
    {
      id: "health-counseling",
      header: "Health Counseling",
      content: (
        <Paragraph
          text={content?.paragraphs[0].content}
          title={content?.paragraphs[0].title}
        />
      ),
    },
    {
      id: "body-treatments",
      header: "Body Treatments",
      content: (
        <List
          title={content?.lists[0]?.title}
          listArray={content?.lists[0]?.content}
        />
      ),
    },
    {
      id: "faqs",
      header: "FAQs",
      content: (
        <List
          title={content?.lists[0]?.title}
          listArray={content?.lists[0]?.content}
        />
      ),
    },
    {
      id: "fees",
      header: "Fees",
      content: (
        <List
          title={content?.lists[0]?.title}
          listArray={content?.lists[0]?.content}
        />
      ),
    },
  ];

  return (
    <Layout currentPage="ayurveda">
      <>
        <h1 className="text-green text-center text-[6.5rem] -mb-[50px] -mt-[24px] relative z-10 font-display drop-shadow-sm">
          ayurveda
        </h1>
        {image1?.src && (
          <div className="w-11/12 mx-auto drop-shadow">
            <Image
              src={image1.src}
              alt=""
              width={1000}
              height={500}
              className="mx-auto"
            />
          </div>
        )}
        <div className="-mt-12 bg-not-white relative z-10">
          <ExpandableMenu items={items} />
        </div>
      </>
    </Layout>
  );
};

export default Ayurveda;
