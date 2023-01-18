import { useRouter } from "next/router";
import { HomeWrapDiv } from "../../src/components/index/style";
import Footer from "../../src/components/index/Footer";
import Gnv from "../../src/components/index/Gnv";
import Top from "../../src/components/index/Top";
import { getTestDetailData } from "../../src/services/axiosManager";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Item from "../../src/components/view/item";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { GetServerSideProps } from "next";
import Loding from "../../src/components/common/Loding";
interface props {}

export default function Post({ id }: any): JSX.Element {
  const { data, error } = useQuery("testDetailData", () =>
    getTestDetailData(id)
  );

  // const { error, data } = useQuery<any[], Error>(
  //   "getTestDetailData",
  //   () => getTestDetailData(id),
  //   {
  //     enabled: !!id,
  //   }
  // );

  return (
    <HomeWrapDiv>
      <Top></Top>
      <Gnv></Gnv>
      <Suspense fallback={<Loding></Loding>}>
        <ErrorBoundary fallback={<div>err...</div>}>
          <Item data={data}></Item>
        </ErrorBoundary>
      </Suspense>
      <Footer></Footer>
    </HomeWrapDiv>
  );
}

export async function getServerSideProps(context: { query: { id: any } }) {
  const id = context.query.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("testDetailData", () =>
    getTestDetailData(id)
  );

  if (queryClient)
    return {
      props: {
        id: id,
        dehydratedState: dehydrate(queryClient),
      },
    };
}
interface IHOCProp {
  id?: string;
}
