/* eslint-disable react/prop-types */
import { Alchemy, Network } from "alchemy-sdk";
import { createContext, useContext } from "react";

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const FetchDataContext = createContext();

function FetchDataProvider({ children }) {
  const fetchBlockData = async (blockNumber) => {
    try {
      const blockData = await alchemy.core.getBlockWithTransactions(
        blockNumber
      );
      return blockData;
    } catch (error) {
      console.error("Error fetching data: ", error.message);
      throw error;
    }
  };

  const fetchTxnData = async (txnHash) => {
    try {
      const txnData = await alchemy.core.getTransaction(txnHash);
      return txnData;
    } catch (error) {
      console.error("Error fetching data", error.message);
      throw error;
    }
  };

  const fetchAddData = async (address) => {
    try {
      const addBalance = await alchemy.core.getBalance(address);
      // const history = await alchemy.core.getHistory(address);
      return addBalance;
    } catch (error) {
      console.error("Error fetching address data", error.message);
      throw error;
    }
  };

  return (
    <FetchDataContext.Provider
      value={{
        fetchBlockData,
        fetchTxnData,
        fetchAddData,
      }}
    >
      {children}
    </FetchDataContext.Provider>
  );
}

function useFetchedData() {
  const context = useContext(FetchDataContext);
  if (!context)
    throw new Error("useFetcedContext must be used within a FetchDataProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { FetchDataProvider, useFetchedData };
