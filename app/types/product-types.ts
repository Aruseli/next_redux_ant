export interface ProductItem {
  id: string;
  title: string;
  startPrice?: number
  endPrice?: number
  startEuro?: number
  endEuro?: number
  image? : string;
  description?: string;
}

export interface ProductState {
  items: ProductItem[];
}
