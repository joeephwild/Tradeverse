import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, MainNav, MissionStatement, SellingPoint } from "@/components";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
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
      <div className="bg-[#000] py-[80px] bg-hero-pattern2 bg-cover bg-center bg-no-repeat">
        <MissionStatement />
        <SellingPoint />
      </div>
    </>
  );
}
