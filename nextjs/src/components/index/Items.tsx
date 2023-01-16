import { useQuery } from "react-query";
import { getTestData } from "../../services/axiosManager";
import Item from "./item";
import { ItemsTitleDiv, Title, ItemsDiv } from "./style";

interface props {}

export default function Items(): JSX.Element {
  const { isLoading, isError, data, error } = useQuery("testData", getTestData);
  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error</span>;
  return (
    <ItemsTitleDiv>
      <Title>베스트 상품</Title>
      <ItemsDiv>
        {data.map((value: any): JSX.Element => {
          return <Item key={value.id} data={value}></Item>;
        })}
      </ItemsDiv>
    </ItemsTitleDiv>
  );
}
