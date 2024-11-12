import type { Metadata } from "next";
import { CartList } from "./components/cart-block/cart-list";
import { CartBlock } from "./components/cart-block/cart-block";
import { Flex } from "antd";
import { Carousel } from "./components/carousel/carousel";

export default function IndexPage() {
  return (<Flex gap={95} align="start" vertical>
      <CartBlock />
      <Carousel />
    </Flex>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
