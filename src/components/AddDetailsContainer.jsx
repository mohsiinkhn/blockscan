/* eslint-disable react/prop-types */
import AddTransactionsList from "./AddTransactionsList";
import styles from "./AddDetailsContainer.module.css";

function AddDetailsContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.hash}>Transaction Hash</span>
        <span className={styles.blockAge}>Block</span>
        <span className={styles.blockAge}>Age</span>
        <span className={styles.fromToValue}>From</span>
        <span className={styles.fromToValue}>To</span>
        <span className={styles.fromToValue}>Value</span>
      </div>
      <hr />
      <AddTransactionsList />
    </div>
  );
}

export default AddDetailsContainer;
