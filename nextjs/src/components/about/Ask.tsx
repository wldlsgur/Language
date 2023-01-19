import {
  AskDiv,
  AskForm,
  AskFormTitleInput,
  AskFormTitle,
  AskTitle,
  AskFormInfoInput,
  AskFormSubmitBtn,
} from "./style";

export const Ask = (): JSX.Element => {
  return (
    <AskDiv>
      <AskTitle>문의 사항</AskTitle>
      <AskForm>
        <AskFormTitle>제목</AskFormTitle>
        <AskFormTitleInput type="text" name="title"></AskFormTitleInput>
        <AskFormTitle>내용</AskFormTitle>
        <AskFormInfoInput type="textarea" name="info"></AskFormInfoInput>
        <AskFormSubmitBtn type="submit" value="보내기"></AskFormSubmitBtn>
      </AskForm>
    </AskDiv>
  );
};
