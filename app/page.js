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
    </div>
  );
}
