'use client'
import { Button, Checkbox, Col, Flex, Image, Input, List, Row, Space, Typography } from "antd"
import { memo } from "react"
import { CartItem } from "@/app/types/cart-types";
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, toggleChecked, removeItem } from "@/lib/features/cart/cartSlice";
import { Container } from "../custom-components/container";
import { formattedNumber } from "@/lib/number-format";
import { ButtonDecrease, ButtonIncrease } from "../custom-components/list-buttons";

export const CartList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);
  const checkedState = useSelector((state: any) => state.cart.checked);
  
  return (<>
      <List<CartItem>
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item, index) => (
          <List.Item key={item.id} style={{position: 'relative'}}>
            <Row justify="center" align="middle">
              <Col span={12}>
                <Flex justify="space-between" align="middle">
                  <Image
                    width={100}
                    height={100}
                    src={item.image}
                    alt={item.title}
                  />
                  <Space direction="vertical">
                    <Typography.Text strong>{item.title}</Typography.Text>
                    <Description item={item} />
                  </Space>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex justify="center" align="middle" gap={2}>
                  <ButtonDecrease
                    style={{
                      backgroundColor: '#F6F8FA',
                      border: 'none',
                      borderTopLeftRadius: '4px',
                      borderBottomLeftRadius: '4px',
                      borderTopRightRadius: '0px',
                      borderBottomRightRadius: '0px',
                    }}
                    variant="filled"
                    icon={<MinusOutlined />}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  />
                  <Input variant="filled" value={item.quantity} type="number"
                    style={{
                      backgroundColor: '#F6F8FA',
                      border: 'none',
                      borderTopLeftRadius: '0px',
                      borderBottomLeftRadius: '0px',
                      borderTopRightRadius: '0px',
                      borderBottomRightRadius: '0px',
                      width: '34px',
                      height: '34px',
                    }}
                  />
                  <ButtonIncrease
                    style={{
                      backgroundColor: '#F6F8FA',
                      border: 'none',
                      borderTopLeftRadius: '0px',
                      borderBottomLeftRadius: '0px',
                      borderTopRightRadius: '4px',
                      borderBottomRightRadius: '4px',
                    }}
                    variant="filled"
                    icon={<PlusOutlined />}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  />
                </Flex>
              </Col>
              <Col span={4}>
                <Typography.Text>{formattedNumber(item.price * (item.quantity ?? 0))} &#8381;</Typography.Text>
              </Col>
            </Row>
            <Button icon={<CloseOutlined />} type="text" className='close-button' onClick={() => dispatch(removeItem(item.id))} />
          </List.Item>
        )}
      />
      <Container>
        <Flex justify="space-between" align="center" gap={20} className="flex_staff">
          <Checkbox checked={checkedState} onChange={() => dispatch(toggleChecked())} />
          <Image src="../../../staff.png" alt="staff-image" />
          <Space direction="vertical" size={0}>
            <Typography.Text>Установка</Typography.Text>
            <Typography.Text>Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</Typography.Text>
          </Space>
        </Flex>
      </Container>
    </>
  )
}

const Description = memo(({item}:{item: CartItem}) => {
  return (
    <Space direction="vertical" size={0}>
      <Typography.Text className="text-12">{item.description}</Typography.Text>
      <Typography.Text type="secondary">{item.number}</Typography.Text>
    </Space>
  )
})