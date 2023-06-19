import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, MainNav } from "@/components";
import { useTradeContext } from "@/context";
import { useEffect } from "react";
import { WALLET } from "@dataverse/runtime-connector";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { runtimeConnector } = useTradeContext();

  useEffect(() => {
    console.log({ runtimeConnector });
  }, []);

  const contractCall = async () => {
    await runtimeConnector?.connectWallet(WALLET.METAMASK);
    const res = await runtimeConnector?.contractCall({
      contractAddress: "0xB07E79bB859ad18a8CbE6E111f4ad0Cca2FD3Da8",
      abi: [
        {
          inputs: [],
          name: "metadata",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "hub",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pubId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectModule",
                  type: "address",
                },
              ],
              internalType: "struct IDataToken.Metadata",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      method: "metadata",
      params: [],
    });
    console.log({ res });
  };

  return (
    <main className="bg-hero-pattern object-cover  bg-no-repeat !w-screen h-[880px] h-creen">
      <MainNav />
      <div>
        <h1>
          Future of E-commerce: <br />
          Connect, Engage, and Transact
        </h1>
        <p>
          Step into a decentralized marketplace where possibilities come alive.
          Create your own store, showcase your products in real-time live
          sessions, and engage directly with buyers through interactive Q&A
          sessions.
        </p>
        <Button title="Get Started" />
        <button onClick={contractCall}>contractCall</button>
      </div>
    </main>
  );
}
