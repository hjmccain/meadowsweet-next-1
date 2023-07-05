import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";
import { ContentSection } from ".";
import List from "@/components/List";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.midwifery },
  };
}

type MidwiferyProps = { content?: ContentSection };

const Midwifery: React.FC<MidwiferyProps> = ({ content }) => {
  const image1 = content?.illustrations[0] || null;
  const image2 = content?.illustrations[1] || null;
  console.log(content);

  return (
    <Layout currentPage="midwifery">
      <>
        {image2?.src && (
          <div className="pb-8 drop-shadow">
            <Image
              src={image2.src}
              alt=""
              width={1000}
              height={500}
              className="mx-auto"
            />
          </div>
        )}
        <Paragraph
          text={content?.paragraphs[0].content}
          title={content?.paragraphs[0].title}
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
        <List
          title={content?.lists[0].title}
          listArray={content?.lists[0].content}
        />
      </>
    </Layout>
  );
};

export default Midwifery;
