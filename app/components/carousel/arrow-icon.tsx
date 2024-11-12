import type { GetProps } from 'antd';
import Icon from '@ant-design/icons';

type CustomIconComponentProps = GetProps<typeof Icon>;

const ArrowSVG = () => (
  <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
    <title>arrow icon</title>
    <path d="M9 19L1 10L9 0.999999" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Arrow = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowSVG} {...props} />
);