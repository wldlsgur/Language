import styled from "styled-components";

export const AboutWrap = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
// About Component
export const IntroduceDiv = styled.div`
  padding: 3em 0 5em 0;
`;
export const IntroduceTitle = styled.h1`
  color: green;
  border-bottom: 1px solid darkgray;
  padding: 0 0 1em 0;
`;
export const IntroduceItems = styled.ul`
  padding: 1em 0 0 0;
  & .email,
  .url {
    color: blue;
  }
`;
export const IntroduceItem = styled.li`
  font-size: 1rem;
  padding: 0.5em;
  font-weight: bold;
`;
// Introduce Component
export const AskDiv = styled.div``;
export const AskTitle = styled(IntroduceTitle)``;
export const AskForm = styled.form`
  padding: 1em 0 3em 0;
`;
export const AskFormTitle = styled.h3`
  margin: 2em 0 0 0;
`;
export const AskFormTitleInput = styled.input`
  width: 100%;
  height: 2em;
  border-radius: 5px;
  border: 1px solid darkgray;
`;
export const AskFormInfoInput = styled(AskFormTitleInput)`
  height: 6em;
`;
export const AskFormSubmitBtn = styled.input`
  color: white;
  background: orange;
  border-radius: 5px;
  border: none;
  width: 5em;
  height: 2em;
  margin: 1em 0 0 0;
`;

// Ask Component
