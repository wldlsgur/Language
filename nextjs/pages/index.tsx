import { ReactElement, useEffect } from "react";
import { HomeWrapDiv } from "../src/components/index/style";
import Head from "next/head";
import Top from "../src/components/index/Top";
import Footer from "../src/components/index/Footer";
import Gnv from "../src/components/index/Gnv";
import { getTestData } from "../src/services/api";

export default function Home(): ReactElement {
  useEffect(() => {
    let data = getTestData();
    console.log(data);
  });
  return (
    <HomeWrapDiv>
      <Head>
        <title>인혁이의 Next Js!!</title>
      </Head>
      <Top></Top>
      <Gnv></Gnv>
      <Footer></Footer>
    </HomeWrapDiv>
  );
}
