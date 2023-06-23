import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import { ContentSection } from ".";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";

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
      <ContentPage content="I am the about page" />
    </Layout>
  );
};

export default About;
