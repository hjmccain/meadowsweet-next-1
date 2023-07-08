import CloseIcon from "@/public/icons/CloseIcon";
import MenuIcon from "@/public/icons/MenuIcon";
import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

export interface ExpandableMenuItem {
  id: string;
  header: string;
  content: ReactNode;
}

interface ExpandableMenuProps {
  items: Array<ExpandableMenuItem>;
}

const ExpandableMenu: React.FC<ExpandableMenuProps> = ({ items }) => {
  const [expanded, updateExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const init: Record<string, boolean> = {};
    const ids = items.reduce((acc, current) => {
      return {
        ...acc,
        [current.id]: false,
      };
    }, init);

    updateExpanded(ids);
  }, []);

  return (
    <div className="bg-not-white">
      {items.map((item, index) => {
        const isOpen = expanded[item.id];
        return (
          <>
            <button
              onClick={() =>
                updateExpanded({
                  ...expanded,
                  [item.id]: !expanded[item.id],
                })
              }
              className={classNames(
                index + 1 !== items.length && "border-b-2 border-pink-bright",
                "bg-not-white text-4xl text-pink-bright py-6 w-full text-left px-12 flex justify-between"
              )}>
              {item.header}
              <span className="mt-2">
                {isOpen ? (
                  <MenuIcon width={"30px"} color="#fb6eb4" />
                ) : (
                  <CloseIcon width={"30px"} color="#fb6eb4" />
                )}
              </span>
            </button>
            <div
              className={classNames(
                isOpen ? "my-4 p-8" : "h-0 invisible",
                "text-xl bg-pink-light rounded-lg drop-shadow"
                // "transition-all duration-1000"
              )}>
              {item.content}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ExpandableMenu;
