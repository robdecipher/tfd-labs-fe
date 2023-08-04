// Required Imports
import Link from 'next/link';

// Styling, Components & Assets
import styles from './social-banner.module.css';
import InstagramIcon from '../icons/instagram-icon';
import FacebookIcon from '../icons/facebook-icon';
import TwitterIcon from '../icons/twitter-icon';
import YouTubeIcon from '../icons/youtube-icon';

function SocialBanner() {

    return(
        <section className={styles['social-banner']}>
            <div className={styles['social-banner-inner-wrapper']}>
                <div className={styles['social-banner-header']}>
                    <h2 className={styles['social-banner-header-text']}><span className='text-accent'>Follow Us</span> <br />on our Socials</h2>
                </div>
                <div className={styles['social-banner-content']}>
                    <p className={styles['social-banner-header-intro']}>
                        Your winning streak starts here! Follow us on our socials for exclusive winning strategies, analysis, predictions, and a bit of fun!
                        Join the community and we'll celebrate together. Leave the guesswork behind. 
                    </p>
                    <div className={styles['social-banner-social-links']}>
                        <Link href='#'><InstagramIcon /></Link>
                        <Link href='#'><FacebookIcon /></Link>
                        <Link href='#'><TwitterIcon /></Link>
                        <Link href='#'><YouTubeIcon /></Link>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SocialBanner;