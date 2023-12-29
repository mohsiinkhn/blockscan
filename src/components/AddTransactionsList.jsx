import AddTransactionRow from "./AddTransactionRow";
import styles from "./AddTransactionsList.module.css";

function AddTransactionsList() {
  return (
    <div className={styles.list}>
      <AddTransactionRow />
      <AddTransactionRow />
    </div>
  );
}

export default AddTransactionsList;
