import { useContext, createContext, useState, useEffect } from "react";
import { RuntimeConnector, Extension, WALLET } from "@dataverse/runtime-connector";

interface TradeVerseNode {
  children: React.ReactNode;
}

interface TradeVerseContextType {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  runtimeConnector: RuntimeConnector | undefined;
}

const TradeVerse = createContext<TradeVerseContextType | null>(null);

export const TradeVerseProvider: React.FC<TradeVerseNode> = ({ children }) => {
  const [address, setAddress] = useState("");
  const [runtimeConnector, setRuntimeConnector] = useState<RuntimeConnector>();

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (typeof window !== "undefined") {
          const runtimeConnector = new RuntimeConnector(Extension);
          // Perform any initialization or side effects here
         
        }
      } catch (error) {
        console.log(error);
      }
    };
    const runtimeConnector = new RuntimeConnector(Extension);
    setRuntimeConnector(runtimeConnector);
    console.log("init...", runtimeConnector);
  }, []);

  const contextValue: TradeVerseContextType = {
    address,
    setAddress,
    runtimeConnector,
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