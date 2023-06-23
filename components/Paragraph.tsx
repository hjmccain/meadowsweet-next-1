import classNames from "classnames";

interface ParagraphProps {
  text: string;
  title?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, title }) => {
  return (
    <div className="mb-8">
      {title && (
        <>
          <h4 className="mb-4 p-4 border-green border text-2xl bg-pink-light text-center drop-shadow">
            {title}
          </h4>
        </>
      )}
      <p className="">{text}</p>
    </div>
  );
};

export default Paragraph;
