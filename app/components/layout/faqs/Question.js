// Required Imports
import { useState } from 'react';

// Styling, Components & Assets
import styles from './Question.module.css';
import ExpandIcon from '../../icons/expand-icon';
import CollapseIcon from '../../icons/collapse-icon';

function Question({ question, answer }) {

    const [expanded, setExpanded] = useState(false);

    return(
        <article className={styles['faq-list-faq-wrapper']}>
            <header className={styles['faq-header']}>
                <h4 className={styles['faq-header-question']} onClick={() => setExpanded(!expanded)}>{question}</h4>
                <button className={styles['faq-header-toggle']} onClick={() => setExpanded(!expanded)}>
                    {expanded ? <CollapseIcon /> : <ExpandIcon />}
                </button>
            </header>
            <div className={styles['faq-body-answer']}>
                {expanded && <p className={styles['faq-body-answer-text']}>{answer}</p>}
            </div>
        </article>
    )

}

export default Question;