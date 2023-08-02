"use client"

// Required Imports
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Styling, Components & Assets
import styles from './logo-slider.module.css';
import LeagueLogos from '@/app/data/LeagueLogos';

// Slider Component
function LogoSlider() {

    const settings = {
        dots:false,
        arrows:false,
        infinite:true,
        speed:1500,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
                breakpoint:1320,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint:991,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    };

    return(
        <section className={styles['logo-slider']}>
            <div className={styles['logo-slider-inner-wrapper']}>
                <div className={styles['logo-slider-header']}>
                    <h2 className={styles['logo-slider-header-text']}><span className='text-accent'>Supported</span><br /> Leagues</h2>
                </div>
                <div className={styles['logo-slider-slides-wrapper']}>
                    <Slider {...settings}>
                        {LeagueLogos.map((item) => (
                            <div key={item.id}>
                                <h2 className={styles['logo-slider-slide-title-sr-only']}>{item.title}</h2>
                                <Image 
                                    src={item.src}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );

}

export default LogoSlider;