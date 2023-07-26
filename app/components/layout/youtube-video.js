"use client"

// Required Imports
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

// Styling, Components & Assets
import styles from './youtube-video.module.css';

function YouTubeVideo() {

    return(
        <section className={styles['youtube-video']}>
            <div className={styles['youtube-video-inner-wrapper']}>
                <LiteYouTubeEmbed 
                    aspectHeight="9"
                    aspectWidth="16"
                    id="1MobY_vR7-g"
                    title="Intro to The Football Directive"
                />
            </div>
        </section>
    );

}

export default YouTubeVideo;