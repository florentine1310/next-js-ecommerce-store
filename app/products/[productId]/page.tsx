import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import AddToCartForm from './AddToCartForm';
import styles from './page.module.scss';

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export async function generateMetadata(props: Props) {
  const singleProduct = await getProductInsecure(
    Number((await props.params).productId),
  );

  if (!singleProduct) notFound();

  return {
    title: singleProduct.name,
    description: `Buy ${singleProduct.name} online with Plantify`,
  };
}

export default async function ProductPage(props: Props) {
  const singleProduct = await getProductInsecure(
    Number((await props.params).productId),
  );

  console.log('Props:', singleProduct);
  if (!singleProduct) notFound();

  return (
    <div className={styles.ProductDetails}>
      <Image
        data-test-id="product-image"
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
        <div>Stock: {singleProduct.stock} items</div>
        <div data-test-id="product-price" className={styles.Price}>
          {singleProduct.price}
        </div>
        <AddToCartForm selectedProduct={singleProduct} />
      </div>
    </div>
  );
}
