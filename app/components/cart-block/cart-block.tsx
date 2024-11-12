'use client'
import { Col, Typography, Row, Space, Button, Flex } from "antd";
import { CartList } from "./cart-list";
import { Container } from "../custom-components/container";
import { CartResult } from "./cart-result";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/lib/features/cart/cartSlice";

export const CartBlock = () => {
  const dispatch = useDispatch();
  const totalQuant = useSelector((state: any) => state.cart.totalQuantity);
  return (
    <Row gutter={55}>
      <Col span={18}>     
        <Flex align="baseline" justify="space-between" className="w-full">
          <Flex align="baseline" className="w-full" gap={22}>
            <Typography.Title level={1}>Ваша корзина</Typography.Title>
            <Typography.Text type='secondary'>{totalQuant} товара</Typography.Text>
          </Flex>
          <Button type='link' onClick={() => dispatch(clearCart())} className="w-auto">Очистить корзину</Button>
        </Flex>
      </Col>
      <Col span={18}>
        <CartList />
      </Col>
      <Col span={6}>
        <Container>
          <CartResult />
        </Container>
      </Col>
    </Row>
  );
};