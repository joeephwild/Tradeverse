import { TradeVerseProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useHuddle01 } from "@huddle01/react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const { initialize } = useHuddle01();

  useEffect(() => {
    initialize("YOUR_PROJECT_ID");
  }, []);

  return (
    <Provider store={store}>
      <TradeVerseProvider>
        <Component {...pageProps} />
      </TradeVerseProvider>
    </Provider>
  );
}
