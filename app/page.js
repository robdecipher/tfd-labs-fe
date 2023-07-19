import Image from 'next/image';
import styles from './page.module.css';

// Styling, Components & Assets
import HeroSection from './components/layout/hero-section';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  )
}
