// Required Imports

// Styling, Components & Assets
import styles from './lowdown-grid.module.css';
import LowdownItem from './lowdown-item';

function LowdownGrid(props) {

    const { posts } = props;
    
    return(
        <div className={styles['lowdown-grid-wrapper']}>
            <ul className={styles['lowdown-grid']}>
                {posts.map(post => (
                    <LowdownItem key={post.slug} post={post} />
                ))}
            </ul>
        </div>
    );

}

export default LowdownGrid;