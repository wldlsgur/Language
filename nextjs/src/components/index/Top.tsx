import { ReactElement } from "react";
import { TopDiv, TopTitle, TopImage } from "./style";

export default function Top({ test }: any): ReactElement {
  return (
    <TopDiv>
      <TopImage src="assets/images/test.jpg"></TopImage>
      <TopTitle
        onClick={() => {
          test("123");
          console.log("hi");
        }}
      >
        지인혁
      </TopTitle>
    </TopDiv>
  );
}
