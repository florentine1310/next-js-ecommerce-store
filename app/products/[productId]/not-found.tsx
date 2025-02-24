import Link from 'next/link';

export default function ProductNotFound() {
  // You can add any UI inside RootNotFound, including Animations.
  return (
    <div>
      Sorry this product was not found make sure you visit a page that exists.
      <div>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
