import Image from 'next/image';
import React from 'react';
import { getProductInsecure } from '../../../database/products';
import AddToCartForm from './AddToCartForm';
import styles from './page.module.scss';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(
    Number((await props.params).productId),
  );

  return {
    title: singleProduct.name,
    description: `Buy ${singleProduct.name} online with Plantify`,
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(
    Number((await props.params).productId),
  );
  console.log('Props:', singleProduct);
  return (
    <div className={styles.ProductDetails}>
      <Image
        src={`/images/${singleProduct.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
        alt={singleProduct.name}
        width={400}
        height={400}
        className={styles.ProductImage}
      />
      <div className={styles.ProductInformation}>
        <h1>{singleProduct.name}</h1>
        <h3>Product Description:</h3>
        <p>{singleProduct.description}</p>
        <div data-test-id="product-price" className={styles.Price}>
          {singleProduct.price}
        </div>
        <AddToCartForm selectedProduct={singleProduct} />
      </div>
    </div>
  );
}
