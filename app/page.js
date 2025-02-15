import styles from './globals.css';

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function Home() {
  return (
    <div>
      <h1>Plantify</h1>
      <div className={styles.Hero}>
        <h2>Find beautiful plants online</h2>
      </div>
    </div>
  );
}
