import { TextItem } from "@/pages";
import Spiral1 from "@/public/icons/Spiral1";
import Spiral2 from "@/public/icons/Spiral2";

interface ListProps {
  title?: string | null;
  listArray?: Array<TextItem | null> | null;
}

const List: React.FC<ListProps> = ({ title, listArray }) => {
  const nonNullListArray =
    listArray?.filter((el: TextItem | null) => el) || false;

  return nonNullListArray ? (
    <div className="border border-black p-4 bg-light-white mb-8 drop-shadow text-center">
      {title && (
        <h4 className="mb-4 text-3xl pl-3 bg-green/20 py-2">{title}</h4>
      )}
      <ul className="list-none text-left">
        {(nonNullListArray as Array<TextItem>).map((el: TextItem, idx) => {
          const nonNullPre = el.pre.filter((str) => str);
          const formattedPre = nonNullPre.map((str, idx) => (
            <p key={idx} className="mt-4">
              {str}
            </p>
          ));
          return (
            <li key={idx} className="flex mb-4 items-start">
              <div className="mt-2">
                {idx % 2 === 0 ? (
                  <Spiral1 width={"50px"} color="#000" />
                ) : (
                  <Spiral2 width={"50px"} color="#000" />
                )}
              </div>
              {el.h3 ? (
                <div className="ml-4 my-4">
                  <strong className="italic">{el.h3}</strong> {formattedPre}
                </div>
              ) : (
                <div className="ml-4 mt-4">{formattedPre}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};

export default List;
