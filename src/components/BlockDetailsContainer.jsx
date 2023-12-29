/* eslint-disable react/prop-types */
import styles from "./DetailsContainer.module.css";
import { useEffect, useReducer } from "react";
import DetailsRow from "./DetailsRow";
import { useFetchedData } from "../contexts/FetchDataContext";

const initialState = {
  timestamp: 0,
  transactions: 0,
  blockHash: "",
  parentHash: "",
  gasUsed: 0,
  gasLimit: 0,
};

function reducer(state, action) {
  return {
    ...state,
    timestamp: action.timestamp,
    transactions: action.transactions,
    feeRecipient: action.feeRecipient,
    gasUsed: action.gasUsed.toString(),
    gasLimit: action.gasLimit.toString(),
    blockHash: action.blockHash,
    parentHash: action.parentHash,
  };
}

function BlockDetailsContainer({ blockNumber }) {
  const { fetchBlockData } = useFetchedData();
  const [
    {
      timestamp,
      transactions,
      feeRecipient,
      gasUsed,
      gasLimit,
      blockHash,
      parentHash,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchBlockData(Number(blockNumber));
        dispatch({
          timestamp: fetchedData.timestamp,
          transactions: fetchedData.transactions,
          feeRecipient: fetchedData.miner,
          gasUsed: fetchedData.gasUsed,
          gasLimit: fetchedData.gasLimit,
          blockHash: fetchedData.hash,
          parentHash: fetchedData.parentHash,
        });
      } catch (error) {
        console.log("Error fetching block data", error.message);
      }
    };
    fetchData();
  }, [fetchBlockData, blockNumber]);

  return (
    <div className={styles.container}>
      <DetailsRow title="Block Height" value={blockNumber} />
      <DetailsRow title="Timestamp" value={timestamp} />
      <DetailsRow title="Transactions" value={transactions.length} />
      <DetailsRow title="Fee Recipient" value={feeRecipient} />
      <DetailsRow title="Gas Used" value={gasUsed} />
      <DetailsRow title="Gas Limit" value={gasLimit} />
      <DetailsRow title="Block Hash" value={blockHash} />
      <DetailsRow title="Parent Hash" value={parentHash} />
    </div>
  );
}

export default BlockDetailsContainer;
