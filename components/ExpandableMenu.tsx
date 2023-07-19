import CaratIcon from "@/public/icons/CaratIcon";
import MenuIcon from "@/public/icons/MenuIcon";
import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

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

  const handleClick = (id: string) => {
    updateExpanded({
      ...expanded,
      [id]: !expanded[id],
    });

    // if (!expanded[id]) {
    //   setTimeout(() => {
    //     const element = document.getElementById(`content-${id}`);
    //     element?.scrollIntoView({ behavior: "smooth" });
    //   }, 100);
    // } else {
    //   setTimeout(() => {
    //     const element = document.getElementById(`menuItem-${id}`);
    //     element?.scrollIntoView({ behavior: "smooth", block: "end" });
    //   }, 100);
    // }
  };

  return (
    <div className="pt-4 relative">
      {items.map((item, index) => {
        const isOpen = expanded[item.id];

        return (
          <div
            className={classNames(
              index + 1 !== items.length && "border-b-2 border-pink-bright"
            )}
            key={index}>
            <button
              id={`menuItem-${item.id}`}
              onClick={() => handleClick(item.id)}
              className={classNames(
                "bg-not-white hover:bg-pink-light/40 transition-colors text-4xl text-pink-bright py-4 w-full text-left px-8 flex justify-between rounded-3xl my-2 tracking-wide"
              )}>
              {item.header}
              <span
                className={classNames(
                  // "mt-2",
                  isOpen && "-rotate-180 transition-all"
                )}>
                <CaratIcon width={"30px"} color="#fb6eb4" />
              </span>
            </button>
            <div
              id={`content-${item.id}`}
              className={classNames(
                isOpen ? "p-8" : "h-0 invisible",
                "text-xl drop-shadow"
                // "transition-all duration-1000"
              )}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandableMenu;
