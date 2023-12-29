/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import styles from "./DetailsContainer.module.css";
import DetailsRow from "./DetailsRow";
import { useFetchedData } from "../contexts/FetchDataContext";

const initialState = {
  blockNumber: 0,
  form: "",
  to: "",
  value: 0,
  gasPrice: 0,
};

function reducer(state, action) {
  return {
    ...state,
    blockNumber: action.blockNumber,
    from: action.from,
    to: action.to,
    value: action.value.toString(),
    gasPrice: action.gasPrice.toString(),
  };
}

function TransactionDetailsContainer({ txnHash }) {
  const [{ blockNumber, from, to, value, gasPrice }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { fetchTxnData } = useFetchedData();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchTxnData(txnHash);
      dispatch({
        blockNumber: fetchedData.blockNumber,
        from: fetchedData.from,
        to: fetchedData.to,
        value: fetchedData.value,
        gasPrice: fetchedData.gasPrice,
      });
    };
    fetchData();
  }, [fetchTxnData, txnHash]);

  return (
    <div className={styles.container}>
      <DetailsRow title="Transaction Hash" value={txnHash} />
      <DetailsRow title="Block" value={blockNumber} />
      <DetailsRow title="From" value={from} />
      <DetailsRow title="To" value={to} />
      <DetailsRow title="Value" value={value} />
      <DetailsRow title="Gas Price" value={gasPrice} />
    </div>
  );
}

export default TransactionDetailsContainer;
