import { TextItem } from "@/pages";
import classNames from "classnames";

interface ParagraphProps {
  text?: Array<TextItem | null>;
  title?: string | null;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, title }) => {
  const nonNullTextArray = text?.filter((el: TextItem | null) => el) || false;

  return nonNullTextArray ? (
    <div className="mb-8">
      {title && (
        <>
          <h4 className="mb-4 p-4 border-green border text-3xl text-center drop-shadow">
            {title}
          </h4>
        </>
      )}
      <div className="pt-2">
        {(nonNullTextArray as Array<TextItem>).map((el: TextItem, idx) => {
          const nonNullPre = el.pre.filter((str) => str);
          const formattedPre = nonNullPre.map((str, idx) => (
            <p key={idx} className="mt-4">
              {str}
            </p>
          ));
          return (
            <>
              {el.h3 ? (
                <div key={idx} className="ml-4 mb-4">
                  <div className="italic font-extrabold text-center pt-4 text-2xl">
                    {el.h3}
                  </div>{" "}
                  {formattedPre}
                </div>
              ) : (
                <div key={idx} className="ml-4 my-4">
                  {formattedPre}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default Paragraph;
