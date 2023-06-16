import { Illustration, Paragraph, List, Content } from "@/pages";

function extractPreTagContent(htmlString: string) {
  const regex = /<pre[^>]*>(.*?)<\/pre>/g;
  const matches = htmlString.match(regex);

  if (matches) {
    const contentArray = matches.map((match) => {
      const contentRegex = /<pre[^>]*>(.*?)<\/pre>/;
      const matchResult = contentRegex.exec(match);
      return matchResult?.[1] || "";
    });
    return contentArray;
  }

  return [];
}

const parseContent = (res: any): Content => {
  return res.categories.nodes.reduce((obj: any, node: any) => {
    const slug = node.slug;
    const wpContent = node.posts.nodes;

    const content = wpContent.reduce(
      (acc: any, current: any, idx: any) => {
        return (() => {
          const tags = current.tags.nodes.map((obj: any) => obj.name);
          const regexTitle = /<h2[^>]*>(.*?)<\/h2>/;

          if (tags.includes("illustration")) {
            const regexSrc = /src="([^"]+)"/;
            const regexWidth = /width="([^"]+)"/;
            const regexHeight = /height="([^"]+)"/;

            const illustration: Illustration = {
              src: regexSrc.exec(current.content)?.[1] || null,
              width: regexWidth.exec(current.content)?.[1] || null,
              height: regexHeight.exec(current.content)?.[1] || null,
            };
            acc["illustrations"].push(illustration);
          }

          if (tags.includes("paragraph")) {
            const paragraph: Paragraph = {
              title: regexTitle.exec(current.content)?.[1] || null,
              content: extractPreTagContent(current.content),
            };
            acc["paragraphs"].push(paragraph);
          }

          if (tags.includes("list")) {
            const list: List = {
              title: regexTitle.exec(current.content)?.[1] || null,
              content: extractPreTagContent(current.content),
            };
            acc["lists"].push(list);
          }

          return acc;
        })();
      },
      {
        illustrations: [],
        paragraphs: [],
        lists: [],
      }
    );

    obj[slug] = content;

    return obj;
  }, {});
};

export default parseContent;
