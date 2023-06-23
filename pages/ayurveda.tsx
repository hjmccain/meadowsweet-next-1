import Layout from "@/components/Layout";
import { ContentSection } from ".";
import ContentPage from "./contentPage";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.ayurveda },
  };
}

type AyurvedaProps = { content?: ContentSection };

const Ayurveda: React.FC<AyurvedaProps> = ({ content }) => {
  return (
    <Layout currentPage="ayurveda">
      <ContentPage content="I am the ayurveda page" />
    </Layout>
  );
};

export default Ayurveda;
