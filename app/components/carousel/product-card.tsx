import { ProductItem } from "@/app/types/product-types";
import { Button, Space, Flex, Image, Typography } from "antd";
import { memo } from "react";
import { ProductContainer } from "../custom-components/container";
import { formattedNumber } from "@/lib/number-format";

export const ProductCard = memo(({
  title = '',
  startPrice = 0,
  endPrice = 0,
  startEuro = 0,
  endEuro = 0,
  image  = '',
  description = '',
}:ProductItem) => {

  return (
    <ProductContainer>
      <Flex justify="space-between" align="center" vertical className="pa-25">
        <Image width={245} height={245} src={image} alt={title} />
        <Flex align="start" justify="start" vertical className="w-full flex-grow">
          <Typography.Title level={4}>{title}</Typography.Title>
          <Typography.Text className="align-left">{description}</Typography.Text>
          <Typography.Title level={4}>{formattedNumber(startPrice)} &#8381; &ndash; {formattedNumber(endPrice)} &#8381;</Typography.Title>
          <Typography.Text type="secondary">{startEuro} &euro; &ndash; {endEuro} &euro;</Typography.Text>
        </Flex>
        <Button type="primary" size="large">Подробнее</Button>
      </Flex>
    </ProductContainer>
  )
})