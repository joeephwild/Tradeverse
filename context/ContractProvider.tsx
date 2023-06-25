import { createContext, useEffect, useState, useContext } from "react";
import {
  Extension,
  Mode,
  RuntimeConnector,
  WALLET,
} from "@dataverse/runtime-connector";
import { Wallet, ethers } from "ethers";
import connectWithContract, { ProductContract, productAbi } from "@/constant";
import { useAccount, useAccountInfo } from "@particle-network/connect-react-ui";
import { toast } from "react-toastify";

interface ContractChildren {
  children: React.ReactNode;
}

interface ContractContextTypes {
  addProduct: (
    _name: string,
    _category: string,
    _imageLink: string[],
    _descLink: string,
    _price: number,
    _location: string,
    _maxQuantity: number,
    _refundTimeLimit: number
  ) => Promise<void>;
  placeOrder: (id: number, _price: string) => Promise<void>;
  createAStore: (
    _storeName: string,
    _category: string,
    _name: string,
    _lastName: string,
    _description: string,
    _location: string
  ) => Promise<void>;
  storeDetail: never[];
  currentUserStore: never[];
  userProduct: never[];
  allProduct: never[];
  cancelLiveEvent: (id: number) => Promise<any>;
  startStream: (callId: string) => Promise<void>;
  productByAddress: (id: string) => Promise<any>;
  isSellerActive: (id: string) => Promise<any>;
  isLoading: boolean;
  setSellerIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  sellerIsActive: boolean;
}

const ContractContext = createContext<ContractContextTypes | null>(null);

export const ContractProvider = ({ children }: ContractChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const account = useAccount();
  const [storeDetail, setStoreDetails] = useState([]);
  const [currentUserStore, setcurrentUserStore] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [userProduct, setUserProduct] = useState([]);
  const [liveEvent, setLiveEvent] = useState([]);
  const [sellerIsActive, setSellerIsActive] = useState(false);
  //console.log(currentUserStore);

  const createAStore = async (
    _storeName: string,
    _category: string,
    _name: string,
    _lastName: string,
    _description: string,
    _location: string
  ) => {
    try {
      if (typeof window != "undefined") {
        const runtimeConnector: RuntimeConnector = new RuntimeConnector(
          Extension
        );
        await runtimeConnector.connectWallet(WALLET.METAMASK);
        const tx = await runtimeConnector.contractCall({
          contractAddress: ProductContract,
          abi: productAbi,
          method: "createAStore",
          params: [
            _storeName,
            _category,
            _name,
            _lastName,
            _description,
            _location,
          ],
          mode: Mode.Write,
        });
        setIsLoading(true);

        console.log(tx);
        await tx.wait();
        setIsLoading(false);

        toast.success("Store successfully Created");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const productByAddress = async (id: string) => {
    try {
      const result = await connectWithContract();
      const tx = await result.getProductByAddress(id);
      console.log(tx);
      return tx;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const cancelLiveEvent = async (id: number) => {
    try {
      const result = await connectWithContract();
      const tx = await result.cancelLive(id);
      // console.log(tx);
      return tx;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const isSellerActive = async (id: string) => {
    try {
      const result = await connectWithContract();
      const tx = await result.isSellerActive(id);
      console.log(tx);
      return tx;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  async function placeOrder(id: number, _price: string) {
    try {
      const contract = await connectWithContract();

      // Convert price to Ether value
      const priceInEther = ethers.utils.parseEther(_price);

      // Specify a gas limit for the transaction (e.g., 200000)
      const gasLimit = 500000;

      // Call the placeOrder function from the smart contract
      const tx = await contract.placeOrder(id, priceInEther, {
        value: priceInEther,
        gasLimit: gasLimit,
      });

      // Wait for the transaction to be confirmed
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  }

  const startStream = async (callId: string) => {
    try {
      const result = await connectWithContract();
      setIsLoading(true);
      const tx = await result.startStream(callId);
      await tx.wait();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const addProduct = async (
    _name: string,
    _category: string,
    _imageLink: string[],
    _descLink: string,
    _price: number,
    _location: string,
    _maxQuantity: number,
    _refundTimeLimit: number
  ) => {
    try {
      if(typeof window != "undefined"){
        const runtimeConnector: RuntimeConnector = new RuntimeConnector(
          Extension
        );
        await runtimeConnector.connectWallet(WALLET.METAMASK);
        const tx = await runtimeConnector.contractCall({
          contractAddress: ProductContract,
          abi: productAbi,
          method: "addProduct",
          params: [
            _name,
            _category,
            _imageLink,
            _descLink,
            _price,
            _location,
            _maxQuantity,
            _refundTimeLimit
          ],
          mode: Mode.Write,
        });
        setIsLoading(true);

        console.log(tx);
        await tx.wait();
        setIsLoading(false);

        toast.success("Product successfully Created");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const value = {
    createAStore,
    addProduct,
    placeOrder,
    storeDetail,
    currentUserStore,
    userProduct,
    allProduct,
    startStream,
    cancelLiveEvent,
    productByAddress,
    isSellerActive,
    isLoading,
    sellerIsActive,
    setSellerIsActive,
  };
  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = (): ContractContextTypes => {
  const context = useContext(ContractContext);

  if (context === null) {
    throw new Error(
      "useContractContext must be used within a TradeVerseProvider"
    );
  }

  return context;
};
