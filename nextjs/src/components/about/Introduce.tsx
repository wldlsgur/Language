import {
  IntroduceDiv,
  IntroduceItem,
  IntroduceItems,
  IntroduceTitle,
} from "./style";

export function Introduce(): JSX.Element {
  return (
    <IntroduceDiv>
      <IntroduceTitle>회사 소개</IntroduceTitle>
      <IntroduceItems>
        <IntroduceItem>a. Sementic UI</IntroduceItem>
        <IntroduceItem>b. New York, NY</IntroduceItem>
        <IntroduceItem className="email">c. dhgg321@naver.com</IntroduceItem>
        <IntroduceItem className="url">d. sementic-ui.com</IntroduceItem>
      </IntroduceItems>
    </IntroduceDiv>
  );
}
