import { TradeVerseProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useHuddle01 } from '@huddle01/react';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { initialize } = useHuddle01();
 
  useEffect(() => {
    initialize("YOUR_PROJECT_ID")
  }, [])
 
  return (
    <TradeVerseProvider>
      <Component {...pageProps} />
    </TradeVerseProvider>
  );
}
