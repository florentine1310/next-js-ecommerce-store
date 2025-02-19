import Image from 'next/image';
import styles from './page.module.scss';

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function Home() {
  return (
    <div>
      <div className={styles.Hero}>
        <div className={styles.HeroTitle}>
          <h1>Plantify</h1>
          <h2>Find beautiful plants online</h2>
          <button className={styles.HeroButton}>Shop Now</button>
        </div>
        <div>
          <Image
            className={styles.HeroImage}
            src="/homepage/hero-image.jpeg"
            alt="Hero Image"
            width={500}
            height={404}
          />
        </div>
      </div>
      <div className={styles.InfoBanner}>
        <div className={styles.marqueeContent}>
          <p>Free Shipping from 50,00 </p>
          <p>Sustainably grown plants </p>
          <p>1000+ happy customers </p>
        </div>
      </div>
      <div>
        <h2>Bestsellers</h2>
      </div>
      <div>
        <h3>🌱 Step 1: Discover Your Perfect Plant</h3>
        <p>
          Browse through our vibrant selection of plants in our webshop. Whether
          you're a seasoned plant parent or a first-timer, we have the perfect
          green companion waiting for you. Find your favorite plants and add
          them to your cart with just a few clicks!
        </p>
        <h3>🚚 Step 2: Check Out and Get Your Plants Delivered</h3>
        <p>
          Once you've selected your new plant friends, simply proceed to
          checkout. Pay securely and relax as we deliver your plants right to
          your door, ready to thrive in your home.
        </p>
        <h3>💧 Step 3: Care for Your Plants and Enjoy!</h3>
        <p>
          Water them regularly and watch them grow! With a little love and care,
          your new plants will bring life and beauty to your home. Enjoy your
          thriving green space and the joy of having a plant companion by your
          side.
        </p>
      </div>
    </div>
  );
}
