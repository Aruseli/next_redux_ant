import { formattedNumber } from "@/lib/number-format";
import { RootState } from "@/lib/store";
import { Button, Divider, Flex, Space, Typography } from "antd"
import { useState } from "react";
import { useSelector } from "react-redux";

export const CartResult = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(false);
  const handleSubmitOrder = async () => {
    setLoading(true);
    const { items, checked, totalQuantity, totalPrice } = cart;
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          checked,
          totalQuantity,
          totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
        const result = await response.json();
        console.log(result.message);
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setLoading(false);
    }
  };
  const ckeckedState = useSelector((state: any) => state.cart.checked);
  const totalQuant = useSelector((state: any) => state.cart.totalQuantity);
  const totalP = useSelector((state: any) => state.cart.totalPrice);
  return (
    <Flex justify="space-between" align="flex-start" vertical style={{ padding: 32 }}>
      <Typography.Title level={4}>Итого</Typography.Title>
      <Flex justify="space-between" align="flex-start" className='flex_style'>
        <Typography.Text>Сумма заказа</Typography.Text>
        <Typography.Text>{formattedNumber(totalP)} &#8381;</Typography.Text>
      </Flex>
      <Flex justify="space-between" align="flex-start" className='flex_style'>
        <Typography.Text>Количество</Typography.Text>
        <Typography.Text>{totalQuant} шт.</Typography.Text>
      </Flex>
      <Flex justify="space-between" align="flex-start" className='flex_style'>
        <Typography.Text>Установка</Typography.Text>
        <Typography.Text>{ckeckedState ? 'Да' : 'Нет'}</Typography.Text>
      </Flex>
      <Divider />
      <Flex justify="space-between" align="flex-start" className='flex_style'>
        <Typography.Title level={5}>Стоимость товаров</Typography.Title>
        <Typography.Title level={3}>{formattedNumber(totalP)} &#8381;</Typography.Title>
      </Flex>
      <Space direction="vertical" size={12}>
        <Button type="primary" size="large" onClick={handleSubmitOrder} disabled={loading}>{loading ? 'Загрузка...' : 'Оформить заказ'}</Button>
        <Button size="large">Купить в 1 клик</Button>
      </Space>
    </Flex>
  );
}