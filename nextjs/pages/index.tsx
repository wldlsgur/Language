import { ReactElement, useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { HomeWrapDiv } from "../src/components/index/style";
import { getTestData } from "../src/services/axiosManager";
import Head from "next/head";
import Top from "../src/components/index/Top";
import Footer from "../src/components/index/Footer";
import Gnv from "../src/components/index/Gnv";
interface HomeProps {
  data?: object;
}

export default function Home({ data }: HomeProps): ReactElement {
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

  await queryClient.prefetchQuery(
    "dailyword",
    async () => await fetchDailyword()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };

  const data = await getTestData();
  if (data) return { props: { data } };
}
