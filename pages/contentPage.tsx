import { ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";
import List from "@/components/List";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

const ContentPage: React.FC<{ content: ReactNode }> = ({ content }) => {
  return (
    <div className="mt-8">
      {/* <div className="py-8 w-8/12 mx-auto relative z-20">
        <Image
          src="/images/placeholder2.jpg"
          alt=""
          width={1500}
          height={500}
          className="mx-auto"
        />
      </div> */}
      {/* <h2 className="mx-8 mb-8 mt-4 text-center text-5xl">Midwifery</h2> */}
      <div className="m-8 mt-12 text-xl">
        <div className="mb-8 mx-auto drop-shadow">
          <Image
            src="/images/placeholder2.jpg"
            alt=""
            width={1500}
            height={500}
            className="mx-auto"
          />
        </div>
        <Paragraph
          title="Cycle support through an Ayurvedic lens"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <hr className="mb-8 border-green" />
        {/* <div className="mb-8 w-1/2 mx-auto">
            <Image
              src="/images/placeholder-vertical.jpg"
              alt=""
              width={1500}
              height={500}
              className="mx-auto"
            />
          </div> */}
        <List />
        <hr className="mb-8 border-green" />
        <Paragraph
          title="Ayurvedic support for pregnancy"
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Rhoncus aenean vel elit
            scelerisque mauris pellentesque. Egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien. Vitae purus
            faucibus ornare suspendisse. Eros donec ac odio tempor orci dapibus
            ultrices in iaculis. Consectetur libero id faucibus nisl tincidunt
            eget nullam. Quis viverra nibh cras pulvinar mattis nunc sed. Eu nisl
            nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Pharetra diam
            sit amet nisl suscipit adipiscing bibendum est. Condimentum vitae
            sapien pellentesque habitant morbi. Purus semper eget duis at.
            Scelerisque eleifend donec pretium vulputate sapien."
        />
        <Paragraph
          text="Pharetra convallis posuere morbi leo urna. Platea dictumst vestibulum
            rhoncus est pellentesque. Quisque non tellus orci ac auctor. Quis enim
            lobortis scelerisque fermentum. Vivamus at augue eget arcu dictum. Sit
            amet cursus sit amet dictum sit. Interdum velit laoreet id donec. Nibh
            cras pulvinar mattis nunc sed blandit libero volutpat. A diam
            sollicitudin tempor id eu nisl nunc. Sapien nec sagittis aliquam
            malesuada. Vulputate odio ut enim blandit volutpat. Dictum fusce ut
            placerat orci nulla pellentesque. Tristique senectus et netus et
            malesuada. Interdum varius sit amet mattis vulputate enim. Aliquam sem
            et tortor consequat id porta nibh venenatis. Porttitor rhoncus dolor
            purus non enim praesent. Et sollicitudin ac orci phasellus egestas
            tellus rutrum tellus. Laoreet sit amet cursus sit. Consectetur
            adipiscing elit pellentesque habitant morbi. Fermentum leo vel orci
            porta. Enim blandit volutpat maecenas volutpat blandit. Vitae
            ultricies leo integer malesuada nunc vel risus."
        />
        <hr className="mb-8 border-green" />
        <div className="mb-8 drop-shadow">
          <Image
            src="/images/placeholder1.jpg"
            alt=""
            width={1500}
            height={500}
            className="mx-auto"
          />
        </div>
        <Paragraph
          title="Womb support"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </div>
    </div>
  );
};

export default ContentPage;
