import { ReactNode } from "react";

const ContentPage: React.FC<{ content: ReactNode }> = ({ content }) => {
  return <div>{content}</div>;
};

export default ContentPage;
