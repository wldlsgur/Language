import styled from "styled-components";

export const HomeWrapDiv = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
export const TopDiv = styled.div`
  width: 100%;
  margin-top: 1.5em;
  display: flex;
  align-items: flex-end;
`;
export const TopTitle = styled.h1`
  margin: 0 0 10px 10px;
`;
export const TopImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
// Top Components
export const GnvDiv = styled.div`
  margin-top: 10px;
  background: black;
  border-radius: 5px;
`;
export const GnvItems = styled.ul`
  color: white;
  display: flex;
`;
export const GnvItem = styled.li`
  padding: 10px;
  border-radius: 5px;
  &: hover {
    color: yellow;
    background: gray;
  }
`;
// Global Nav Components
export const ItemsTitleDiv = styled.div`
  margin-top: 1.5em;
`;
export const Title = styled.h2`
  padding: 1.5em 0 0.5em 0;
`;
export const ItemsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 100px;
  padding: 2em 2.5em 2em 2.5em;
  // place-items: center center;
  // place-content: center center;
  border-top: 1px solid darkgray;
  & * {
    margin-top: 1.5em;
  }
`;
export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemImage = styled.img`
  width: 60%;
`;
export const ItemName = styled.strong`
  font-size: 1.5rem;
  text-align: center;
  display: -webkit-box;
  -webkt-line-clamp: 2;
  -webkit-box-rient: vertical;
  overflow: hidden;
`;
export const ItemBrand = styled.p`
  color: gray;
`;
export const ItemPrice = styled.strong`
  color: green;
  font-size: 1.5rem;
`;
// Items Components
