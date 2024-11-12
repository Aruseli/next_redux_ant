'use client'
import { CaretRightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Flex, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { formattedNumber } from '@/lib/number-format';

export  const NavCart = () => {
  const totalQuant = useSelector((state: any) => state.cart.totalQuantity);
  const totalP = useSelector((state: any) => state.cart.totalPrice);
  return (<header>
      <Button 
        icon={<ShoppingCartOutlined style={{color: "#0069B4"}} className='text-32' />} 
        type="text" 
        iconPosition='start' 
        style={{ 
          height: 'auto',
          width: 'auto',
          borderRadius: '0.3rem',
          fontSize: '1rem',
          color: '#1F2432',
          paddingTop: '4rem',
          paddingRight: '5.125rem', 
        }}
      >
        <Flex justify="space-between" align="flex-start" vertical>
          <Typography.Text>Ваша корзина</Typography.Text>
          <Typography.Text type="secondary" className='text-12'>{totalQuant} товаров</Typography.Text>
          <Typography.Text className='text-12'>{formattedNumber(totalP)} &#8381;</Typography.Text>
        </Flex>
      </Button>
    </header>
  );
}

export const SubmenuCart = () => {
  return (<nav>
      <Breadcrumb
        separator={<CaretRightOutlined />}
        items={[
          {
            title: 'Главная',
          },
          {
            title: 'Корзина',
            href: '',
          },
        ]}
      />
    </nav>
  )
}