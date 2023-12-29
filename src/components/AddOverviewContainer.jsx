import { useParams } from "react-router-dom";
import AddOverviewCard from "./AddOverviewCard";
import styles from "./AddOverviewContainer.module.css";
import { useEffect, useState } from "react";
import { useFetchedData } from "../contexts/FetchDataContext";
import { Utils } from "alchemy-sdk";

function AddOverviewContainer() {
  const { address } = useParams();
  const { fetchAddData } = useFetchedData();
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAddData(address);
      setBalance(fetchedData.toString());
    };
    fetchData();
  }, [fetchAddData, address]);

  const balanceInEth = balance ? Utils.formatEther(balance) : "..";

  return (
    <div className={styles.container}>
      <AddOverviewCard title="ETHER BALANCE" value={`${balanceInEth} ETH`} />
    </div>
  );
}

export default AddOverviewContainer;
