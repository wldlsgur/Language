import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../src/components/Footer";
import Top from "../src/components/Top";

export default function App({ Component, pageProps }: AppProps) {
  const test: boolean = true;
  return (
    <>
      {test ? <Top></Top> : null}
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
