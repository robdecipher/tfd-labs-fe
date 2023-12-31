import './globals.css'
import { Manrope } from 'next/font/google'

// Required Components
import MainHeader from './components/layout/main-header';
import SocialBanner from './components/layout/social-banner';
import GlobalFooter from './components/layout/footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <MainHeader />
        {children}
        <SocialBanner />
        <GlobalFooter />
      </body>
    </html>
  )
}
