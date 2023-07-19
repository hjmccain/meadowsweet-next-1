import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";
import { ContentSection } from ".";
import List from "@/components/List";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import ExpandableMenu from "@/components/ExpandableMenu";

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

  const items = [
    {
      id: "services",
      header: "Services",
      content: (
        <Paragraph
          text={content?.paragraphs[0].content}
          title={content?.paragraphs[0].title}
        />
      ),
    },
    {
      id: "faqs",
      header: "FAQs",
      content: (
        <List
          title={content?.lists[0].title}
          listArray={content?.lists[0].content}
        />
      ),
    },
    {
      id: "request-consult",
      header: "Request a consultation",
      content: (
        <List
          title={content?.lists[0].title}
          listArray={content?.lists[0].content}
        />
      ),
    },
  ];

  return (
    <Layout currentPage="midwifery">
      <>
        <h1 className="text-green text-center text-[6.5rem] -mb-[50px] -mt-[24px] relative z-10 font-display drop-shadow-sm">
          midwifery
        </h1>
        {image2?.src && (
          <div className="w-11/12 mx-auto drop-shadow">
            <Image
              src={image2.src}
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

export default Midwifery;

// const image1 = content?.illustrations[0] || null;
// const image2 = content?.illustrations[1] || null;
// console.log(content);

// return (
//   <Layout currentPage="midwifery">
//     <>
//       {image2?.src && (
//         <div className="pb-8 drop-shadow">
//           <Image
//             src={image2.src}
//             alt=""
//             width={1000}
//             height={500}
//             className="mx-auto"
//           />
//         </div>
//       )}
//       <Paragraph
//         text={content?.paragraphs[0].content}
//         title={content?.paragraphs[0].title}
//       />
//       {image1?.src && (
//         <div className="pb-8 drop-shadow">
//           <Image
//             src={image1.src}
//             alt=""
//             width={1000}
//             height={500}
//             className="mx-auto"
//           />
//         </div>
//       )}
//       <List
//         title={content?.lists[0].title}
//         listArray={content?.lists[0].content}
//       />
//     </>
//   </Layout>
// );
