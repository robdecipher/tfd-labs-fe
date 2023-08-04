// Required Imports
import Link from 'next/link';

// Styling, Components & Assets
import styles from './footer.module.css';

function GlobalFooter() {

    return(
        <footer className={styles['global-footer']}>
            <div className={styles['global-footer-inner-wrapper']}>
                <div className={styles['global-footer-brand']}>
                    <Link href='/' className={styles['global-footer-brand-name']}>
                        The Football <br/>Directive
                    </Link>
                </div>
                <div className={styles['global-footer-sections-wrapper']}>
                    <div className={styles['global-footer-section']}>
                        <div className={styles['global-footer-section-content']}>
                            <div className={styles['global-footer-section-header']}>
                                <h3 className={styles['global-footer-section-header-title']}>Links & Resources</h3>
                            </div>
                            <ul className={styles['global-footer-section-link-list']}>
                                <li className={styles['global-footer-section-link']}>Match Datapacks</li>
                                <li className={styles['global-footer-section-link']}>How TFD Works</li>
                                <li className={styles['global-footer-section-link']}>The Lowdown</li>
                                <li className={styles['global-footer-section-link']}>About TFD</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['global-footer-section']}>
                        <div className={styles['global-footer-section-content']}>
                            <div className={styles['global-footer-section-header']}>
                                <h3 className={styles['global-footer-section-header-title']}>Our Socials</h3>
                            </div>
                            <ul className={styles['global-footer-section-link-list']}>
                                <li className={styles['global-footer-section-link']}>Instagram</li>
                                <li className={styles['global-footer-section-link']}>Facebook</li>
                                <li className={styles['global-footer-section-link']}>Twitter</li>
                                <li className={styles['global-footer-section-link']}>YouTube</li>
                                <li className={styles['global-footer-section-link']}>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['global-footer-section']}>
                        <div className={styles['global-footer-section-content']}>
                            <div className={styles['global-footer-section-header']}>
                                <h3 className={styles['global-footer-section-header-title']}>Policies & Legal Bits</h3>
                            </div>
                            <ul className={styles['global-footer-section-link-list']}>
                                <li className={styles['global-footer-section-link']}>Terms & Conditions</li>
                                <li className={styles['global-footer-section-link']}>Privacy Policy</li>
                                <li className={styles['global-footer-section-link']}>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles['global-footer-copyright']}>
                    <span className={styles['global-footer-copyright-text']}>&copy; 2023 The Football Directive</span>
                </div>
            </div>
        </footer>
    );

}

export default GlobalFooter;