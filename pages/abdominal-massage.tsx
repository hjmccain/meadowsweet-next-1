import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import parseContent from "@/lib/parseContent";
import { ContentSection } from ".";
import { getContent } from "@/lib/api";
import Paragraph from "@/components/Paragraph";
import List from "@/components/List";
import Image from "next/image";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.abdominalmassage },
  };
}

type AbdominalMassageProps = { content?: ContentSection };

const AbdominalMassage: React.FC<AbdominalMassageProps> = ({ content }) => {
  console.log({ content });
  const image1 = content?.illustrations[0] || null;

  return (
    <Layout currentPage="abdominal massage">
      <>
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
        {/** History/lineage */}
        <Paragraph
          text={content?.paragraphs[0]?.content}
          title={content?.paragraphs[0]?.title}
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

export default AbdominalMassage;
