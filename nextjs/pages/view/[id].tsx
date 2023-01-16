import { useRouter } from "next/router";
import { HomeWrapDiv } from "../../src/components/index/style";
import Footer from "../../src/components/index/Footer";
import Gnv from "../../src/components/index/Gnv";
import Top from "../../src/components/index/Top";
import { getTestDetailData } from "../../src/services/axiosManager";

interface props {}

export default function Post(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  return (
    <HomeWrapDiv>
      <Top></Top>
      <Gnv></Gnv>
      <div>Post: {id}</div>
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
