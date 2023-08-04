"use client"

// Styling, Components & Assets
import Question from "./Question";
import styles from './QuestionList.module.css';

// Import FAQs Data
import FAQs from "@/app/data/FAQs";

function FAQList() {

    return(
        <section className={styles['faq-list']}>
            <div className={styles['faq-list-inner-wrapper']}>
                <div className={styles['faq-list-header']}>
                    <h2 className={styles['faq-list-header-text']}><span className='text-accent'>Frequently Asked</span><br />Questions</h2>
                </div>
                {FAQs.map((question) => (
                    <Question key={question.id} {...question} />
                ))}
            </div>
        </section>
    );

}

export default FAQList;