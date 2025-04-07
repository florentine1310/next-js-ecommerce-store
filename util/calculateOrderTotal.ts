type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export function calculateOrderTotal(cartItems: CartItem[]) {
  const totalPrice = Number(
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2),
  );

  return totalPrice;
}
