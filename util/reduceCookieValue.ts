import type { Product } from '../migrations/00000-createTableProducts';

export default function reduceCookieValue(
  selectedProduct: Product,
  quantity: number,
) {
  if (quantity < 0) {
    throw new Error('No negative quantity allowed');
  }
  const cookieValue = {
    id: selectedProduct.id,
    name: selectedProduct.name,
    quantity: quantity,
  };

  return cookieValue;
}
