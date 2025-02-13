import React from 'react';
import { getProduct } from '../../../database/products';
import AddToCartForm from './AddToCartForm';

export async function generateMetadata(props) {
  const singleProduct = await getProduct(
    Number((await props.params).productId),
  );

  return {
    title: singleProduct.name,
    description: `Buy ${singleProduct.name} online with Plantify`,
  };
}

export default async function ProductPage(props) {
  const singleProduct = getProduct(Number((await props.params).productId));
  console.log('Props:', singleProduct);
  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <p>{singleProduct.description}</p>
      <div data-test-id="product-price">{singleProduct.price}</div>
      <AddToCartForm selectedProduct={singleProduct} />
    </div>
  );
}
