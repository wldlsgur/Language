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
