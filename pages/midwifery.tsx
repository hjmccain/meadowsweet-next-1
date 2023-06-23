import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";
import { ContentSection } from ".";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.midwifery },
  };
}

type MidwiferyProps = { content?: ContentSection };

const Midwifery: React.FC<MidwiferyProps> = ({ content }) => {
  console.log(content);

  return (
    <Layout currentPage="midwifery">
      <ContentPage content="I am the midwifery page" />
    </Layout>
  );
};

export default Midwifery;
