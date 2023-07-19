import Layout from "@/components/Layout";
import ContentPage from "./contentPage";
import { ContentSection } from ".";
import { getContent } from "@/lib/api";
import parseContent from "@/lib/parseContent";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

export async function getStaticProps({ preview = false }) {
  const res = await getContent();

  const content = parseContent(res);

  return {
    props: { content: content.about },
  };
}

type ContactProps = { content?: ContentSection };

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <Layout currentPage="about meadowsweet">
      <>
        <h1 className="text-green text-center text-[6.5rem] -mb-[50px] -mt-[24px] relative z-10 font-display drop-shadow-sm">
          contact
        </h1>
        <div className="mt-8 text-xl">
          <form className="w-11/12 mx-auto border border-green mb-8 bg-light-white">
            <h4 className="m-6 text-3xl text-center">Request a consultation</h4>
            <div className="m-4">
              <div className="p-2">
                <label className="pr-2" htmlFor="name">
                  Name
                </label>
                <input type="text" className="w-full bg-not-white" id="name" />
              </div>
              <div className="p-2">
                <label className="pr-2" htmlFor="email">
                  Email
                </label>
                <input type="text" className="w-full bg-not-white" id="email" />
              </div>
              <div className="p-2">
                <label className="pr-2" htmlFor="message">
                  Message
                </label>
                <textarea className="w-full bg-not-white" id="message" />
                <button
                  type="submit"
                  className="mx-auto bg-pink-light hover:bg-pink-light/90 drop-shadow px-4 py-2 mt-6 block">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="w-11/12 mb-8 mx-auto text-center font-serif">
            123 west pine st • phippsburg, me •{" "}
            <span className="underline">207 555 5555</span> •{" "}
            <span className="underline">hello@meadowsweet.com</span>
          </div>
          <div className="w-11/12 mx-auto drop-shadow mb-8">
            <Image
              src={"/images/phippsburg.png"}
              alt=""
              width={1000}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Contact;
