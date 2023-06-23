import Layout from "@/components/Layout";
import { ContentSection } from ".";
import ContentPage from "./contentPage";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";

type HomeProps = { content?: ContentSection };

const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <div>
      <ContentPage content="I am the home page" />
    </div>
  );
};

export default Home;
