import { ReactElement } from "react";
import { TopDiv, TopTitle, TopImage } from "./style";

export default function Top(): ReactElement {
  return (
    <TopDiv>
      <TopImage src="assets/images/test.jpg"></TopImage>
      <TopTitle>지인혁</TopTitle>
    </TopDiv>
  );
}
