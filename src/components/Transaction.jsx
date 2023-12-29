/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Transaction.module.css";

function Transaction({ transaction }) {
  return (
    <div className={styles.transaction}>
      <img
        src="transaction.svg"
        alt="Transaction Receipt"
        className={styles.icon}
      />
      <div className={styles.content}>
        <Link className="customLink" to={`transaction/${transaction.hash}`}>
          {transaction.hash.slice(0, 9)}...
        </Link>
        <div>
          <span className={styles.fromTo}>From </span>
          <span className={styles.address}>
            {transaction.from.slice(0, 7)}...{transaction.from.slice(-7)}
          </span>
        </div>
        <div className={styles.to}>
          <span className={styles.fromTo}>To </span>
          <span className={styles.address}>
            {transaction.to.slice(0, 7)}...{transaction.to.slice(-7)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
