import { ReactElement, useEffect, useState } from "react";
import { HomeWrapDiv } from "../src/components/index/style";
import Head from "next/head";
import Top from "../src/components/index/Top";
import Footer from "../src/components/index/Footer";
import Gnv from "../src/components/index/Gnv";
import { getTestData } from "../src/services/axiosManager";

export default function Home({ data }: any): ReactElement {
  let [testData, setTestData] = useState("");

  // useEffect(() => {
  //   getTestData()
  //     .then((data) => {
  //       console.log("결과 : ", data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  console.log("데이터 : ", data);
  return (
    <HomeWrapDiv>
      <Head>
        <title>인혁이의 Next Js!!</title>
      </Head>
      <Top test={setTestData}></Top>
      <Gnv></Gnv>
      <Footer></Footer>
    </HomeWrapDiv>
  );
}
export async function getServerSideProps() {
  const data = await getTestData();
  return { props: { data } };
}
