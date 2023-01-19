import { Ask } from "../src/components/about/Ask";
import { Introduce } from "../src/components/about/Introduce";
import { AboutWrap } from "../src/components/about/style";
import Footer from "../src/components/index/Footer";
import Gnv from "../src/components/index/Gnv";
import Top from "../src/components/index/Top";

export default function About(): JSX.Element {
  return (
    <AboutWrap>
      <Top></Top>
      <Gnv></Gnv>
      <Introduce></Introduce>
      <Ask></Ask>
      <Footer></Footer>
    </AboutWrap>
  );
}
