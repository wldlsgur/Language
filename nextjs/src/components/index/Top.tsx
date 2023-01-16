import { TopDiv, TopTitle, TopImage } from "./style";

export default function Top(): JSX.Element {
  return (
    <TopDiv>
      <TopImage src="/assets/images/test.jpg"></TopImage>
      <TopTitle>지인혁</TopTitle>
    </TopDiv>
  );
}
