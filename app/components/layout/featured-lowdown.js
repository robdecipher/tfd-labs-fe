// Styling, Components & Assets
import styles from './featured-lowdown.module.css';
import LowdownGrid from '../the-lowdown/lowdown-grid';

function FeaturedLowdownPosts(props) {

    return(
        <section className={styles['featured-lowdown']}>
            <div className={styles['featured-lowdown-inner-wrapper']}>
                <div className={styles['featured-lowdown-header']}>
                    <h2 className={styles['featured-lowdown-header-text']}><span className='text-accent'>The</span><br />Lowdown</h2>
                </div>
                <LowdownGrid posts={props.posts} />
            </div>
        </section>
    );

}

export default FeaturedLowdownPosts;