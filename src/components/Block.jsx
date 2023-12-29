/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Block.module.css";
import { Link } from "react-router-dom";
import { useFetchedData } from "../contexts/FetchDataContext";

function Block({ blockNumber }) {
  const { fetchBlockData } = useFetchedData();
  const [transactions, setTransactions] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const fetchedData = await fetchBlockData(blockNumber);
        setTransactions(fetchedData.transactions);
        setTimestamp(fetchedData.timestamp);
      } catch (error) {
        console.log("Error fetching transactions: ", error.message);
        throw error;
      }
    };
    fetchData();
  }, [blockNumber, fetchBlockData]);

  const date = new Date(timestamp * 1000);
  const seconds = date.getSeconds();

  return (
    <li className={styles.block}>
      <img src="blockBox.svg" alt="Block" className={styles.icon} />
      <div className={styles.content}>
        {blockNumber <= 10 ? (
          <span>Loading...</span>
        ) : (
          <Link className="customLink" to={`block/${blockNumber}`}>
            {blockNumber}
          </Link>
        )}
        {transactions === null ? (
          <span className={styles.txns}>Loading...</span>
        ) : (
          <span className={styles.txns}>
            {transactions.length} transactions
          </span>
        )}
        <span className={styles.timestamp}>{seconds} secs ago</span>
      </div>
    </li>
  );
}

export default Block;
