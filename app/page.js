import Image from 'next/image';
import styles from './page.module.css';

// Styling, Components & Assets
import HeroSection from './components/layout/hero-section';
import LogoSlider from './components/layout/logo-slider';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <LogoSlider />
    </main>
  )
}