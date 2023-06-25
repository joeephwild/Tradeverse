import { useContext, createContext, useState, useEffect } from "react";
import {
  RuntimeConnector,
  Extension,
  WALLET,
  Mode,
} from "@dataverse/runtime-connector";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { CartItem } from "../types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { ProductContract, productAbi } from "@/constant";
import { ethers } from "ethers";

interface TradeVerseNode {
  children: React.ReactNode;
}

interface TradeVerseContextType {
  address: String | undefined;
  setAddress: React.Dispatch<React.SetStateAction<String | undefined>>;
  handleAddToCart: (item: any) => void;
  handleUpdateQuantity: (itemId: number, quantity: number) => void;
  getRoomId: () => Promise<any>;
  storeDetail: never[]
  allProduct: never[]
  currentUserStore: never[]
  productByAddress: (id: string) => Promise<any>
  userProduct: never[]
}

const TradeVerse = createContext<TradeVerseContextType | null>(null);

export const TradeVerseProvider: React.FC<TradeVerseNode> = ({ children }) => {
  const [address, setAddress] = useState<String | undefined>("");
  const [isLoading, setIsLoading] = useState(false);
  const [storeDetail, setStoreDetails] = useState([]);
  const [currentUserStore, setcurrentUserStore] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [userProduct, setUserProduct] = useState([]);
  const [liveEvent, setLiveEvent] = useState([]);
  const [sellerIsActive, setSellerIsActive] = useState(false);



  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };
  const handleUpdateQuantity = (itemId: number, change: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      dispatch(updateQuantity({ itemId, quantity: newQuantity }));
    }
    console.log(item);
  };

    const getStoreDetails = async () => {
    try {
      if (typeof window !== "undefined") {
        const runtimeConnector: RuntimeConnector = new RuntimeConnector(
          Extension
        );
        await runtimeConnector.connectWallet(WALLET.METAMASK);
        const tx = await runtimeConnector.contractCall({
          contractAddress: ProductContract,
          abi: productAbi,
          method: "getStoreDetails",
          params: [],
          mode: Mode.Read,
        });
        setIsLoading(true);
        // console.log(tx);
        setStoreDetails(tx);
        setIsLoading(false);
        return tx
      } // Return the fetched store details
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const getProductDetails = async () => {
    try {
      if (typeof window !== "undefined") {
        const runtimeConnector: RuntimeConnector = new RuntimeConnector(
          Extension
        );
        await runtimeConnector.connectWallet(WALLET.METAMASK);
        const tx = await runtimeConnector.contractCall({
          contractAddress: ProductContract,
          abi: productAbi,
          method: "getProductDetails",
          params: [],
          mode: Mode.Read,
        });
        setIsLoading(true);
        // console.log(tx);
        setStoreDetails(tx);
        setIsLoading(false);
        return tx
      } // Return the fetched store details
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const getOrderDetails = async () => {
    try {
      if (typeof window !== "undefined") {
        const runtimeConnector: RuntimeConnector = new RuntimeConnector(
          Extension
        );
        await runtimeConnector.connectWallet(WALLET.METAMASK);
        const tx = await runtimeConnector.contractCall({
          contractAddress: ProductContract,
          abi: productAbi,
          method: "getAllOrder",
          params: [],
          mode: Mode.Read,
        });
        setIsLoading(true);
        // console.log(tx);
        setStoreDetails(tx);
        setIsLoading(false);
        return tx
      } // Return the fetched store details
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const productByAddress = async (id: string) => {
    try {
      if (typeof window !== "undefined") {
        const runtimeConnector: RuntimeConnector = new RuntimeConnector(
          Extension
        );
        await runtimeConnector.connectWallet(WALLET.METAMASK);
        const tx = await runtimeConnector.contractCall({
          contractAddress: ProductContract,
          abi: productAbi,
          method: "getProductByAddress",
          params: [id],
          mode: Mode.Read,
        });
        setIsLoading(true);
        // console.log(tx);
        setStoreDetails(tx);
        setIsLoading(false);
        return tx
      } // Return the fetched store details
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const getLiveDetails = async () => {
    try {
      if (typeof window !== "undefined") {
        const runtimeConnector: RuntimeConnector = new RuntimeConnector(
          Extension
        );
        await runtimeConnector.connectWallet(WALLET.METAMASK);
        const tx = await runtimeConnector.contractCall({
          contractAddress: ProductContract,
          abi: productAbi,
          method: "getLiveDetail",
          params: [],
          mode: Mode.Read,
        });
        setIsLoading(true);
        // console.log(tx);
        setStoreDetails(tx);
        setIsLoading(false);
        return tx
      } // Return the fetched store details
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };


  const filterForUserStore = async () => {
    const result = await getStoreDetails();
    const userStore = await result.filter((item: any) => item.owner === address);
    // console.log(userStore)
    const parsedStore = await userStore.map((item: any) => ({
      name: item.name,
      desc: item.description,
      customer: item.customer,
      isActive: item.isSellerActive,
      storeName: item.storeName,
    }));
    console.log(parsedStore);
    setcurrentUserStore(parsedStore);
    console.log(userStore);
  };

  
  const fliterProductDetails = async () => {
    try {
      const result = await getProductDetails();
      const tx = await result.filter((item: any) => item.owner === address);
      console.log(tx);
      const parsedProduct = await tx.map((item: any) => ({
        name: item.name,
        desc: item.descLink,
        image: item.imageLink,
        price: Number(item.price),
        category: item.category,
        pid: Number(item.index),
        quantity: Number(item.quantity),
        location: item.location,
        max: Number(item.maxQuantity),
        owner: item.owner,
        refund: item.refundTimeLimit,
        active: item.sellerActive,
        id: item.meetingId,
      }));
      console.log(parsedProduct);
      setAllProduct(parsedProduct);
      return tx; // Return the fetched store details
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const filterForUserProduct = async () => {
    const result = await getProductDetails();
    const userProduct = result.filter((item: any) => item.owner === address);
    const parsedProduct = await userProduct.map((item: any) => ({
      name: item.name,
      desc: item.descLink,
      image: item.imageLink,
      price: ethers.utils.formatEther(item.price),
      category: item.category,
      pid: Number(item.index),
      quantity: Number(item.quantity),
      location: item.location,
      max: Number(item.maxQuantity),
      owner: item.owner,
      refund: Number(item.refundTimeLimit),
    }));
    console.log(parsedProduct);
    setUserProduct(parsedProduct);
    console.log(userProduct);
  };

  useEffect(() => {
    filterForUserProduct()
    filterForUserStore()
    fliterProductDetails()
    getLiveDetails()
  })

  useEffect(() => {
    const getAddress = async () => {
      if (typeof window != "undefined") {
        const runtimeConnector = new RuntimeConnector(Extension);
        const pkh = await runtimeConnector?.wallet?.getCurrentPkh();
        console.log(pkh);
      }
    };
    getAddress()
  }, [address]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
            "x-api-key": "2PCDD8nmkQavcrdx7GKf2DegWfpPYMnR",
          },
        }
      );
      console.log(data);
      return data.data.roomId;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  const router = useRouter();

  useEffect(() => {
    const checkUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          router.push("/");
        }
      });
    };
  });

  const contextValue: TradeVerseContextType = {
    address,
    setAddress,
    handleAddToCart,
    handleUpdateQuantity,
    getRoomId,
    currentUserStore,
    storeDetail,
    allProduct,
    productByAddress,
    userProduct
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
