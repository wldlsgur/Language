import { ReactElement, useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { HomeWrapDiv } from "../src/components/index/style";
import { getTestData } from "../src/services/axiosManager";
import Head from "next/head";
import Top from "../src/components/index/Top";
import Footer from "../src/components/index/Footer";
import Gnv from "../src/components/index/Gnv";

export default function Home(): ReactElement {
  const { isLoading, isError, data, error } = useQuery("testData", getTestData);

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error</span>;
  console.log(data);

  return (
    <HomeWrapDiv>
      <Head>
        <title>Next Js!!</title>
      </Head>
      <Top></Top>
      <Gnv></Gnv>
      <Footer></Footer>
    </HomeWrapDiv>
  );
}
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("testData", getTestData);

  if (queryClient)
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
}
