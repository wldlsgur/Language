import { useRouter } from "next/router";
import { HomeWrapDiv } from "../../src/components/index/style";
import Footer from "../../src/components/index/Footer";
import Gnv from "../../src/components/index/Gnv";
import Top from "../../src/components/index/Top";
import { getTestDetailData } from "../../src/services/axiosManager";
import { isError, useQuery } from "react-query";
import { useEffect } from "react";
import Item from "../../src/components/view/item";

interface props {}

export default function Post(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isError, error, data } = useQuery<any[], Error>(
    "getTestDetailData",
    () => getTestDetailData(id),
    {
      enabled: !!id, //id가 있을때만 실행
    }
  );
  if (isLoading || !data) return <div>Loding...</div>;
  if (isError) return <div>err...</div>;
  return (
    <HomeWrapDiv>
      <Top></Top>
      <Gnv></Gnv>
      <Item data={data}></Item>
      <Footer></Footer>
    </HomeWrapDiv>
  );
}
