import { useContext, createContext, useState, useEffect } from "react";
import {
  RuntimeConnector,
  Extension,
  WALLET,
} from "@dataverse/runtime-connector";
import { useRouter } from "next/router";
import axios from "axios";
import { ADDRCONFIG } from "dns";

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
          const wallet = await runtimeConnector.connectWallet(WALLET.METAMASK);
          await runtimeConnector.createCapability({
            app: "TradeVerse",
            wallet: WALLET.METAMASK,
          });
          setAddress(wallet.address);
          setRuntimeConnector(runtimeConnector);
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  const getRoomId = async () => {
    try {
      const { data } = await axios.post(
        "https://iriko.testing.huddle01.com/api/v1/create-iframe-room",
        {
          title: "Huddle01-Test",
          roomLocked: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "a7XSoEa7jnMJufnlJzZuHxF7bDjS0OcP",
          },
        }
      );
      console.log(data);
      return data.data.meetingLink;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

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