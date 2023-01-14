import { ReactElement, useEffect, useState } from "react";
import { HomeWrapDiv } from "../src/components/index/style";
import Head from "next/head";
import Top from "../src/components/index/Top";
import Footer from "../src/components/index/Footer";
import Gnv from "../src/components/index/Gnv";
import { getTestData } from "../src/services/api";

export default function Home(): ReactElement {
  let [testData, setTestData] = useState([]);

  useEffect(() => {
    let data = getTestData();
    console.log("결과", data);
  }, []);

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
