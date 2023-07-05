import Layout from "@/components/Layout";
import { ContentSection } from ".";
import ContentPage from "./contentPage";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";
import Paragraph from "@/components/Paragraph";
import List from "@/components/List";
import Image from "next/image";

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

  return (
    <Layout currentPage="ayurveda">
      <>
        {/** Health counseling */}
        <Paragraph
          text={content?.paragraphs[0]?.content}
          title={content?.paragraphs[0]?.title}
        />
        {image1?.src && (
          <div className="pb-8 drop-shadow">
            <Image
              src={image1.src}
              alt=""
              width={1000}
              height={500}
              className="mx-auto"
            />
          </div>
        )}
        {/** Body treatments */}
        <List
          title={content?.lists[0]?.title}
          listArray={content?.lists[0]?.content}
        />
        {/** FAQs */}
        <List
          title={content?.lists[0]?.title}
          listArray={content?.lists[0]?.content}
        />
        {/** Fees */}
        <List
          title={content?.lists[0]?.title}
          listArray={content?.lists[0]?.content}
        />
      </>
    </Layout>
  );
};

export default Ayurveda;
