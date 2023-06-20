import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, MainNav } from "@/components";
import { useTradeContext } from "@/context";
import { useEffect } from "react";
import { WALLET } from "@dataverse/runtime-connector";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
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
    <>
      <div className="bg-hero-pattern border-b-4 border-[#fff] object-cover bg-cover bg-top  bg-no-repeat !w-screen h-[880px] h-creen">
        <MainNav />
        <div>
          <div className="flex flex-col mt-[320px] items-start w-full pl-[80px]">
            <h1 className="text-[48px] font-normal text-[#fff] leading-[56.25px]">
              Future of E-commerce: <br />
              <span className="font-black">Connect, Engage, and Transact</span>
            </h1>
            <p className="text-[18px] font-normal leadin-[24px] max-w-[669px] h-[72px] mt-[16px] mb-[40px] tracking-wider">
              Step into a decentralized marketplace where possibilities come
              alive. Create your own store, showcase your products in real-time
              live sessions, and engage directly with buyers through interactive
              Q&A sessions.
            </p>
            <Button title="Get Started" isLink link="/onboarding/onboard" />
          </div>
        </div>
        </div>
        </>
  )
}
