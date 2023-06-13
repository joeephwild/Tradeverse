import { useContext, createContext, useState, useEffect } from "react";
import { WALLET } from "@dataverse/runtime-connector";
import { RuntimeConnector, Extension } from "@dataverse/runtime-connector";


interface TradeVerseNode {
  children: React.ReactNode;
}

interface TradeVerseContextType {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

const TradeVerse = createContext<TradeVerseContextType | null>(null);

export const TradeVerseProvider: React.FC<TradeVerseNode> = ({ children }) => {
  //const runtimeConnector = new RuntimeConnector(Extension);
  const [address, setAddress] = useState("");



  useEffect(() => {
    // Perform any initialization or side effects here

    return () => {
      // Perform any cleanup when the component unmounts
    };
  }, []);

  const contextValue: TradeVerseContextType = {
    address,
    setAddress,
  };

  return (
    <TradeVerse.Provider value={contextValue}>{children}</TradeVerse.Provider>
  );
};

export const useTradeContext = (): TradeVerseContextType => {
  const context = useContext(TradeVerse);

  if (context === null) {
    throw new Error("useTradeContext must be used within a TradeVerseProvider");
  }

  return context;
};