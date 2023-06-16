import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import parseContent from "@/lib/parseContent";
import { IndexProps } from ".";
import { getContent } from "@/lib/api";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.abdominalmassage },
  };
}

type AbdominalMassageProps = IndexProps & {};

const AbdominalMassage: React.FC<AbdominalMassageProps> = ({ content }) => {
  return (
    <Layout currentPage="abdominal massage">
      <ContentPage content="I am the abdominal massage page" />
    </Layout>
  );
};

export default AbdominalMassage;
