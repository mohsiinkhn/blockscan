import styles from "./AddTransactionRow.module.css";

function AddTransactionRow() {
  return (
    <div className={styles.row}>
      <span className={styles.hash}>0xa05d7b905e12a05b16...</span>
      <span className={styles.blockAge}>18799847</span>
      <span className={styles.blockAge}>2 mins ago</span>
      <span className={styles.fromToValue}>0x502306...9cBC2000</span>
      <span className={styles.fromToValue}>0x3ec49e...2813932E</span>
      <span className={styles.fromToValue}>0.10547822 ETH</span>
    </div>
  );
}

export default AddTransactionRow;
