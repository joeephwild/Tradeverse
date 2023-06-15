import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, MainNav } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-hero-pattern object-cover  bg-no-repeat !w-screen h-[880px] h-creen">
      <MainNav />
      <div >
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
      </div>
    </main>
  );
}
