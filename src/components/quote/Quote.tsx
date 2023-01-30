import styles from './Quote.module.css';

export function Quote() {
  return (
    <div>
      <div className={styles.Quote_text}>
        This is a random quote
      </div>
      <div className={styles.Quote_author}>
        ~ Anon
      </div>
    </div>
  )
}