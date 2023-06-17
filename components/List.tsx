import Spiral1 from "@/public/icons/Spiral1";
import Spiral2 from "@/public/icons/Spiral2";
import classNames from "classnames";

interface ListProps {}

const List: React.FC<ListProps> = ({}) => {
  return (
    <div className="border border-black p-4 bg-light-white mb-8">
      <h4 className="mb-4 text-2xl pl-3">
        Pregnancy, Birth Preparation & Postpartum treatments
      </h4>
      <ul className="list-none">
        <li className="flex mb-4">
          <Spiral1 width={"50px"} color="#ddd06a" />
          <p className="ml-4">
            Consectetur libero — Id faucibus nisl tincidunt eget nullam. Quis
            viverra nibh cras pulvinar mattis nunc sed. Eu nisl nunc mi ipsum
            faucibus vitae aliquet nec ullamcorper. Pharetra diam sit amet nisl
            suscipit adipiscing bibendum est.
          </p>
        </li>
        <li className="flex mb-4">
          <Spiral2 width={"50px"} color="#ddd06a" />
          <p className="ml-4">
            Egestas fringilla phasellus — Faucibus scelerisque eleifend donec
            pretium vulputate sapien. Vitae purus faucibus ornare suspendisse.
            Eros donec ac odio tempor orci dapibus ultrices in iaculis.
          </p>
        </li>
        <li className="flex mb-4">
          <Spiral1 width={"50px"} color="#ddd06a" />
          <p className="ml-4">
            Interdum — Varius sit amet mattis vulputate enim. Aliquam sem et
            tortor consequat id porta nibh venenatis. Porttitor rhoncus dolor
            purus non enim praesent. Et sollicitudin ac orci phasellus egestas
            tellus rutrum tellus. Laoreet sit amet cursus sit. Consectetur
            adipiscing elit pellentesque habitant morbi. Fermentum leo vel orci
            porta.
          </p>
        </li>
        <li className="flex mb-4">
          <Spiral2 width={"50px"} color="#ddd06a" />
          <p className="ml-4">
            Duis aute — Irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default List;
