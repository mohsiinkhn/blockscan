/* eslint-disable react/prop-types */
import { useRecentData } from "../contexts/RecentDataContext";
import Block from "./Block";
import styles from "./ListCard.module.css";
import Transaction from "./Transaction";

function ListCard() {
  const { recentBlockNumber, recentTransactions } = useRecentData();

  return (
    <div className={styles.flexbox}>
      <BlocksList blockNumber={recentBlockNumber} />
      <TransactionsList recentTransactions={recentTransactions} />
    </div>
  );
}

function BlocksList({ blockNumber, getTransactions }) {
  const blocks = new Array(10);

  for (let i = 0; i < 10; i++) blocks.push(blockNumber - i);

  return (
    <div className={styles.card}>
      <div className={styles.title}>Latest Blocks</div>
      <hr />
      <ul className={styles.list}>
        {blocks.map((block, i) => (
          <Block
            blockNumber={block}
            getTransactions={getTransactions}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

function TransactionsList({ recentTransactions }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Latest Transactions</div>
      <hr />
      {recentTransactions.length === 0 ? (
        <span>Loading...</span>
      ) : (
        <ul className={styles.list}>
          {recentTransactions.slice(0, 10).map((tx) => (
            <Transaction transaction={tx} key={tx.hash} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListCard;
