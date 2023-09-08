export interface AllProductListType {
  carts: CartListType[];
  total: number;
  skip: number;
  limit: number;
}

export interface FinalProductListType {
    products: ProductListType[];
    total: number;
    skip: number;
    limit: number;
  }

export interface CartListType {
  id: number;
  products: ProductListType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface ProductListType {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  cartQuantity: number
}
