import Link from "next/link";
import { ItemBrand, ItemDiv, ItemImage, ItemName, ItemPrice } from "./style";

interface props {
  data: any;
}
export default function Item({ data }: props): JSX.Element {
  return (
    <Link href={`/view/${data.id}`}>
      <ItemDiv>
        <ItemImage src={data.image_link} alt={data.name}></ItemImage>
        <ItemName>{data.name}</ItemName>
        <ItemBrand>
          {data.category} {data.product_type}
        </ItemBrand>
        <ItemPrice>${data.price}</ItemPrice>
      </ItemDiv>
    </Link>
  );
}
