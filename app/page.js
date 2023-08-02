import Image from 'next/image';
import styles from './page.module.css';

// Styling, Components & Assets
import HeroSection from './components/layout/hero-section';
import LogoSlider from './components/layout/logo-slider';
import YouTubeVideo from './components/layout/youtube-video';
import FAQList from './components/layout/faqs/QuestionList';
import FeaturedLowdownPosts from './components/layout/featured-lowdown';

const DUMMY_POSTS = [
  {
    slug:'premier-league-gw1-predictions',
    image:'premier-league-gw1-review.png',
    imageAlt:'Picture of a premier league match in progress',
    category:'predictions',
    date:'2023-07-28',
    title:'GW1 Premier League Review, Analysis & this weeks Predictions',
    excerpt:'This is a dummy excerpt for a post and I need it to be a bit longer. Need a little bit more.'
  },
  {
    slug:'la-liga-gw1-predictions',
    image:'la-liga-gw1-review.png',
    imageAlt:'Picture of Barcelona vs Real Madrid',
    category:'predictions',
    date:'2023-08-06',
    title:'GW1 Spanish La Liga Review, Analysis & this weeks Predictions',
    excerpt:'This is a dummy excerpt for a post. I wonder what the character min & max should be.'
  },
  {
    slug:'predicting-goals-markets',
    image:'predicting-goals-markets.png',
    imageAlt:'Picture of a computer with football data being shown',
    category:'technical analysis',
    date:'2023-07-29',
    title:'How we predict the goals market with detailed statistical analysis',
    excerpt:'This is a dummy excerpt for a post. The design is real important. Like really!'
  },
  {
    slug:'transfers-and-moves-across-europe',
    image:'transfers-and-moves-across-europe.png',
    imageAlt:'A collage of players who have transferred this season',
    category:'news & trends',
    date:'2023-08-01',
    title:"Who's on the move and will they have an impact in the season ahead?",
    excerpt:'This is a dummy excerpt for a post. In order to check on different viewports.'
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <LogoSlider />
      <YouTubeVideo />
      <FAQList />
      <FeaturedLowdownPosts posts={DUMMY_POSTS} />
    </main>
  )
}