type ProductCartItem = {
  name: string;
  price: number;
  id: number;
  quantity: number;
};

export function calculateOrderTotal(cartWithDetails: ProductCartItem[]) {
  const totalPrice = Number(
    cartWithDetails
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2),
  );

  return totalPrice;
}
