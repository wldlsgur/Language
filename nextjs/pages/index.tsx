import { dehydrate, QueryClient, useQuery } from "react-query";
import { HomeWrapDiv } from "../src/components/index/style";
import { getTestData } from "../src/services/axiosManager";
import Head from "next/head";
import Top from "../src/components/index/Top";
import Footer from "../src/components/index/Footer";
import Gnv from "../src/components/index/Gnv";
import Items from "../src/components/index/Items";

interface props {}

export default function Home(): JSX.Element {
  return (
    <HomeWrapDiv>
      <Head>
        <title>HOME || 지인혁</title>
        <meta name="description" content="지인혁 홈 입니다."></meta>
      </Head>
      <Top></Top>
      <Gnv></Gnv>
      <Items></Items>
      <Footer></Footer>
    </HomeWrapDiv>
  );
}
export function getServerSideProps() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery("testData", getTestData);

  if (queryClient)
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
}
