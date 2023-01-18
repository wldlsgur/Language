import styled from "styled-components";

export const ViewWrap = styled.div``;
///Wrap Component
export const ItemDiv = styled.div`
  border-bottom: 1px solid darkgray;
  display: flex;
  padding: 2em 0 2em 0;
`;
export const ViewImage = styled.img`
  width: 15%;
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2em;
`;
export const InfoName = styled.strong`
  font-size: 2rem;
`;
export const InfoPrice = styled.strong`
  font-size: 3rem;
  color: green;
`;
export const InfoCategory = styled.span`
  font-size 2rem;
`;
export const InfoBuyBtn = styled.button`
  width: 20%;
  height: 15%;
  font-size: 1rem;
  background: orange;
  color: white;
  border-radius: 5px;
  border: none;
  margin-top: 2em;
  transition: transform 1s;
  &:hover {
    cursor: Pointer;
    transform: scale(1.2);
  }
`;
export const DescriptionDiv = styled.div`
  padding: 2em 0 3em 0;
`;
export const DescriptionTitle = styled.h3`
  margin-bottom: 2em;
  font-size: 2rem;
`;
export const DescriptionContent = styled.p`
  font-size: 1.5rem;
`;
