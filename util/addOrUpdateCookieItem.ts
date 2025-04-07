type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

export default function addOrUpdateCookieItem(
  cartItems: CartItem[],
  cookieValue: CartItem,
) {
  const cookieArray = cartItems;
  const itemToUpdate = cartItems.find((cartItem) => {
    return cartItem.id === cookieValue.id;
  });

  if (!itemToUpdate) {
    cookieArray.push({
      id: cookieValue.id,
      name: cookieValue.name,
      quantity: cookieValue.quantity,
    });
  } else {
    itemToUpdate.quantity += cookieValue.quantity;
  }

  return cookieArray;
}
