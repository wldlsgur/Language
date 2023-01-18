import {
  InfoBuyBtn,
  InfoCategory,
  InfoDiv,
  InfoName,
  InfoPrice,
  ItemDiv,
  ViewImage,
  ViewWrap,
  DescriptionDiv,
  DescriptionTitle,
  DescriptionContent,
} from "./style";

export default function Item({ data }: any): JSX.Element {
  const {
    name,
    image_link,
    price,
    description,
    update_at,
    category,
    product_type,
    product_link,
  } = data;

  return (
    <ViewWrap>
      <ItemDiv>
        <ViewImage src={image_link}></ViewImage>
        <InfoDiv>
          <InfoName>{name}</InfoName>
          <InfoPrice>${price}</InfoPrice>
          <InfoCategory>
            {category ? `${category}/` : ""}
            {product_type}
          </InfoCategory>
          <InfoBuyBtn>구매하기</InfoBuyBtn>
        </InfoDiv>
      </ItemDiv>
      <DescriptionDiv>
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionContent>{description}</DescriptionContent>
      </DescriptionDiv>
    </ViewWrap>
  );
}
