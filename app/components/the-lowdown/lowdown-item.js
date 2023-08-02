// Required Imports
import Link from 'next/link';
import Image from 'next/image';

// Styling, Components & Assets
import styles from './lowdown-item.module.css';
import CalendarIcon from '../icons/calendar';
import ArrowRightIcon from '../icons/arrow-right';

function LowdownItem(props) {

    const { slug, image, imageAlt, category, date, title, excerpt } = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day:'numeric',
        month:'long',
        year:'numeric'
    });
    const imagePath = `/assets/the-lowdown/${slug}/${image}`;
    const linkPath = `/the-lowdown/${slug}`

    return(
        <li className={styles['lowdown-post']}>
            <Link href={linkPath}>
                <article className={styles['lowdown-post-wrapper']}>
                    <div className={styles['lowdown-post-img']}>
                        <Image src={ imagePath } alt={ imageAlt } fill={true} />
                    </div>
                    <div className={styles['lowdown-post-text']}>
                        <div className={styles['lowdown-post-category-and-date']}>
                            <span className={styles['lowdown-post-category']}>{ category }</span>
                            <time className={styles['lowdown-post-date']}><CalendarIcon />{ formattedDate }</time>
                        </div>
                        <h3 className={styles['lowdown-post-title']}>{ title }</h3>
                        <p className={styles['lowdown-post-excerpt']}>{ excerpt }</p>
                    </div>
                    <div className={styles['lowdown-post-read-more']}>
                        <button className={styles['lowdown-post-read-more-btn']}>
                            Read More <ArrowRightIcon />
                        </button>
                    </div>
                </article>
            </Link>
        </li>
    );

}

export default LowdownItem;