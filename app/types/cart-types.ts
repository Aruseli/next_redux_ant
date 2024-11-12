export interface CartItem {
  id: string;
  title: string;
  price: number;
  image? : string;
  description?: string;
  number?: string;
  quantity?: number;
}

export interface CartState {
  items: CartItem[];
}
