// Styling, Components & Assets
import styles from './hero-section.module.css';
import ArrowRightIcon from '../icons/arrow-right';

function HeroSection() {

    return(
        <section className={styles['hero-section']}>
            <div className={styles['hero-section-inner-wrapper']}>
                <div className={styles['banner-overlay']}></div>
                    <div className={styles['hero-section-content']}>
                        <div className={styles['hero-section-content-wrapper']}>
                        <div className={styles['hero-section-content-copy']}>
                            <h2 className={styles['hero-section-header-copy']}><span className={styles['header-accent']}>Master</span><br /> the Game!</h2>
                            <p className={styles['hero-section-body-copy']}>Build your winning strategy with our data driven football statistics and predictions to take your profit to the next level.</p>
                        </div>
                        <div className={styles['hero-section-content-ctas']}>
                            <div className={styles['hero-section-content-labs-learn-more']}>
                                <a className={styles['hero-section-learn-more-link']} href='/'>Learn More</a>
                            </div>
                            <div className={styles['hero-section-content-labs-join-now']}>
                                <button className={styles['hero-section-join-now-btn']}>
                                    Join Now <ArrowRightIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;