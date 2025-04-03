import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} transactionsData={transactionsData} />
    </>
  );
}
