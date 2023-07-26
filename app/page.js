import Image from 'next/image';
import styles from './page.module.css';

// Styling, Components & Assets
import HeroSection from './components/layout/hero-section';
import LogoSlider from './components/layout/logo-slider';
import YouTubeVideo from './components/layout/youtube-video';
import FAQList from './components/layout/faqs/QuestionList';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <LogoSlider />
      <YouTubeVideo />
      <FAQList />
    </main>
  )
}