"use client"

// Required Imports
import Link from 'next/link';
import { useState } from 'react';

// Styling, Components & Assets
import styles from './main-header.module.css';
import MenuToggleIcon from '../icons/menu-toggle';
import MenuToggleClose from '../icons/menu-toggle-close';
import LoginMenuIcon from '../icons/login-icon';
import TwitterIcon from '../icons/twitter-icon';
import InstagramIcon from '../icons/instagram-icon';
import YouTubeIcon from '../icons/youtube-icon';

function MainHeader() {

    // Initial Closed State for Navigation Menu
    const [navigation, setNavigation] = useState(false);

    // Control the Main Navigation visibility & Menu Toggle
    function navState() {
        setNavigation(!navigation);
        if(!navigation) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    return(
        <header className={styles['main-header']}>
            <div className={styles['main-header-wrapper']}>
                <div className={styles['header-brand']}>
                    <Link href='/' className={styles['brand-name']}>
                        The Football <br/>Directive
                    </Link>
                </div>
                <nav className={`${navigation ? styles['main-navigation-open'] : styles['main-navigation']}`}>
                    <div className={styles['main-navigation-inner']}>
                        <ul className={styles['main-navigation-menu']}>
                            <li className={styles['main-navigation-menu-item']}>Match DataPacks</li>
                            <li className={styles['main-navigation-menu-item']}>Free Bets</li>
                            <li className={styles['main-navigation-menu-item']}>The Lowdown</li>
                            <li className={styles['main-navigation-menu-item']}>About TFD</li>
                        </ul>
                        <div className={styles['main-navigation-social-icons']}>
                            <a className={styles['main-navigation-social-icon']} href='https://www.instagram.com/thefootballdirective/'>
                                <TwitterIcon />
                            </a>
                            <a className={styles['main-navigation-social-icon']} href='https://www.instagram.com/thefootballdirective/'>
                                <InstagramIcon />
                            </a>
                            <a className={styles['main-navigation-social-icon']} href='https://www.instagram.com/thefootballdirective/'>
                                <YouTubeIcon />
                            </a>
                        </div>
                        <div className={styles['main-navigation-menu-contact-us']}>
                            <button className={styles['main-navigation-menu-btn']}>
                                Login / Signup <LoginMenuIcon />
                            </button>
                        </div>
                    </div>
                </nav>
                <div className={styles['main-navigation-btn-collection']}>
                    <button className={styles['main-navigation-menu-btn']}>
                        Login / Signup <LoginMenuIcon />
                    </button>
                </div>
                <div className={styles['menu-controls']}>
                    <button className={styles['main-navigation-menu-toggle']} onClick={navState} aria-label='Open & Close the Menu'>
                        {navigation ? (<MenuToggleClose />) : (<MenuToggleIcon />)}
                    </button>
                </div>
            </div>
        </header>
    );

}

export default MainHeader;